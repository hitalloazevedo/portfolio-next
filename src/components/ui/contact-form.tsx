import Image from "next/image";
import sendIcon from "@/../public/send-icon.svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formInputSchema } from "@/@types/form-input";

export default function ContactForm() {

  const { register, handleSubmit, formState } = useForm<
    z.infer<typeof formInputSchema>
  >({
    resolver: zodResolver(formInputSchema),
  });

  const { isValid } = formState;

  const onSubmit = (data: z.infer<typeof formInputSchema>) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col items-center gap-3">
      <div className="flex flex-col w-11/12 gap-1">
        <label className="text-white font-medium text-sm" htmlFor="name">
          Name
        </label>
        <input
          placeholder="Your name"
          className="border bg-transparent border-zinc-600 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-1 focus:outline-offset-0 focus:ring-transparent focus:border-[#009900]"
          type="text"
          {...register("name")}
        />
      </div>

      <div className="flex flex-col w-11/12 gap-1">
        <label className="text-white font-medium text-sm" htmlFor="email">
          Email
        </label>
        <input
          placeholder="your@email.com"
          className="border bg-transparent border-zinc-600 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-1 focus:outline-offset-0 focus:ring-transparent focus:border-[#009900]"
          type="text"
          {...register("email")}
        />
      </div>

      <div className="flex flex-col w-11/12 gap-1">
        <label className="text-white text-sm font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          placeholder="Your message"
          rows={5}
          className="border bg-transparent border-zinc-600 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-1 
            focus:ring-transparent focus:outline-offset-0 focus:border-[#009900]"
          {...register("message")}
        ></textarea>
      </div>

      <div className="w-11/12">
        <button
          className={`flex justify-center w-full rounded-md p-2 ${
            !isValid ? "bg-[#006600]" : "bg-[#00f500]"
          }`}
          disabled={!isValid}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
          }}
        >
          <Image className="w-[20px]" src={sendIcon} alt=""></Image>
        </button>
      </div>
    </form>
  );
}
