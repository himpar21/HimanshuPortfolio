// // app/contact/page.tsx
// "use client";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Mail, Github, Linkedin } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <section className="py-20 px-4 md:px-20 bg-[#0d0d0d] text-white">
//       <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-2">
//         Get In Touch
//       </h2>
//       <p className="text-center text-gray-400 mb-12">
//         Interested in collaborating on AI projects or discussing research opportunities? Let's connect.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//         {/* Contact Info */}
//         <Card className="bg-[#111111] p-6 border border-gray-700 rounded-xl space-y-6">
//           <h3 className="text-xl font-bold mb-4">Contact Information</h3>
//           <div className="flex items-center gap-4">
//             <Mail className="text-emerald-500" />
//             <span className="text-white">alex@example.com</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <Linkedin className="text-emerald-500" />
//             <span className="text-white">linkedin.com/in/alexchen</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <Github className="text-emerald-500" />
//             <span className="text-white">github.com/alexchen</span>
//           </div>
//         </Card>

//         {/* Contact Form */}
//         <Card className="bg-[#111111] p-6 border border-gray-700 rounded-xl space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block mb-1 text-sm font-semibold">Name</label>
//               <Input placeholder="Your name" />
//             </div>
//             <div>
//               <label className="block mb-1 text-sm font-semibold">Email</label>
//               <Input placeholder="Your email" />
//             </div>
//           </div>
//           <div>
//             <label className="block mb-1 text-sm font-semibold">Subject</label>
//             <Input placeholder="Subject" />
//           </div>
//           <div>
//             <label className="block mb-1 text-sm font-semibold">Message</label>
//             <Textarea placeholder="Your message" rows={6} />
//           </div>
//           <Button
//             className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 transition-colors text-white rounded-full"
//             type="submit"
//           >
//             Send Message
//           </Button>
//         </Card>
//       </div>
//     </section>
//   );
// }



"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const form = useForm<ContactForm>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  return (
    <section id="contact" className="py-20 px-4 md:px-20 bg-[#0d0d0d] text-white">
      <h2 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-2">
        Get In Touch
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Interested in collaborating on AI projects or discussing research opportunities? Let's connect.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Contact Info */}
        <Card className="bg-[#111111] p-6 border border-gray-700 rounded-xl space-y-0 text-white">
          <h3 className="text-xl font-bold mb-0">Contact Information</h3>
          <div className="flex items-center gap-4">
            <Mail className="text-emerald-500" />
            <span className="text-white">himanshuhp2121@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="text-emerald-500" />
            <span className="text-white">linkedin.com/in/himanshuparab</span>
          </div>
          <div className="flex items-center gap-4">
            <Github className="text-emerald-500" />
            <span className="text-white">github.com/himpar21</span>
          </div>
        </Card>

        {/* Contact Form */}
        <Card className="bg-[#111111] p-6 border border-gray-800 rounded-xl space-y-4 text-white ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => console.log(data))} className="space-y-4 rounded-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl className="rounded-full border border-gray-800">
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl className="rounded-full border border-gray-800">
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                      <FormControl className="rounded-full border border-gray-800">
                      <Input placeholder="Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                      <FormControl className="border border-gray-800">
                      <Textarea rows={6} placeholder="Your message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 transition-colors text-white rounded-full"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
