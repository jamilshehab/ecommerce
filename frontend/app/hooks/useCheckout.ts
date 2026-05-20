"use client";

import { useMemo, useState } from "react";
import { createOrder } from "@/app/lib/services/orders";
import { useCartStore } from "@/app/lib/zustand/zustand";

export function useCheckout() {
  const { cart, clearCart } = useCartStore();

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart],
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    setVerified(false);
  };

  const validate = () => {
    if (!verified) return "Please verify you are human";
    if (!form.name.trim()) return "Full name is required";
    if (!form.phone.trim()) return "Phone is required";
    if (form.phone.length < 8) return "Phone too short";
    if (!form.address.trim()) return "Address is required";
    if (cart.length === 0) return "Cart is empty";
    return null;
  };

  const handleSubmit = async () => {
    if (loading) return;

    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email?.trim() || "",
        phone: form.phone.trim(),
        address: form.address.trim(),

        payment_status: "pending",
        payment_method: "cod",

        orderItem: cart.map((item) => ({
          title: item.title,
          price: Number(item.price),
          quantity: Number(item.quantity),

          // IMPORTANT: ensure this is REAL Strapi product id
          productId: String(item.productId ?? item.id),
        })),

        total: Number(total),
      };

      const order = await createOrder(payload);

      clearCart();
      resetForm();

      const message = `
🛒 New Order #${order?.data?.id || order?.id || ""}

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}

Payment: COD
Total: $${total}

Items:
${cart.map((i) => `- ${i.title} x${i.quantity}`).join("\n")}
      `;

      window.open(
        `https://wa.me/96181066539?text=${encodeURIComponent(message)}`,
        "_blank",
      );

      alert("Order placed successfully");
    } catch (error) {
      console.error("Order Error:", error);
      alert("Order failed. Check backend logs.");
    } finally {
      setLoading(false);
    }
  };

  return {
    cart,
    total,
    form,
    setForm,
    verified,
    setVerified,
    loading,
    handleSubmit,
  };
}
