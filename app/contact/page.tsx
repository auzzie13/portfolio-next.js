"use client";

import { ErrorMessage, SideBar, Spinner } from "@/app/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { Callout, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createMessageSchema } from "../validationSchemas";
import { Metadata } from "next";

const styles =
  "fixed right-0 top-4 h-full flex flex-col pr-8 gap-10 justify-center";

type MessageForm = z.infer<typeof createMessageSchema>;

const ContactPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageForm>({
    resolver: zodResolver(createMessageSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/messages", data);
      router.push("/");
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  });

  return (
    <div className="pt-4  bg-stone-800 mx-2 h-screen">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="pt-4 space-y-2 mx-auto w-1/2 flex flex-col"
        onSubmit={onSubmit}
      >
        <TextField.Input
          placeholder="First Name"
          color="red"
          size="3"
          {...register("first_name")}
        />
        <ErrorMessage>{errors.first_name?.message}</ErrorMessage>
        <TextField.Input
          placeholder="Last Name"
          color="red"
          size="3"
          {...register("last_name")}
        />
        <ErrorMessage>{errors.last_name?.message}</ErrorMessage>
        <TextField.Input
          placeholder="Email"
          color="red"
          size="3"
          {...register("email")}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <TextArea
          className="h-56"
          placeholder="Write me a message..."
          color="red"
          size="3"
          {...register("message")}
        />
        <ErrorMessage>{errors.message?.message}</ErrorMessage>

        <button
          className="bg-transparent hover:bg-red-600 hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded-tl-lg rounded-br-lg mx-auto w-1/4"
          disabled={isSubmitting}
        >
          Send Message {isSubmitting && <Spinner />}
        </button>
      </form>
      <SideBar styles={styles} />
    </div>
  );
};



export default ContactPage;
