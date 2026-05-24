import React from "react";
import { motion } from "framer-motion";
import { MapPin, Milk, Leaf, Coffee, Phone, Mail, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HillHavenDairyFarmWebsite() {
  return (
    <div className="min-h-screen bg-green-50 text-slate-900">
      <header className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/mnt/data/LOGO HILL HAVEN.jpeg"
              alt="Hill Haven Dairies Logo"
              className="w-16 h-16 object-contain rounded-full bg-white"
            />
            <div>
              <h1 className="text-2xl font-bold text-green-800">Hill Haven Dairy Farm</h1>
            <p className="text-sm text-slate-600">Quality milk. Healthy animals. Sustainable farming.</p>
            </div>
          </div>
          <Button className="rounded-2xl bg-green-700 hover:bg-green-800">Contact Us</Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-5">
              <MapPin size={16} /> Located on top of a scenic hill
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-green-900">
              Fresh dairy from a beautiful hilltop farm
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-8">
              Hill Haven Dairy Farm is a modern dairy farming enterprise located on top of a scenic hill, offering a serene environment ideal for dairy farming. The farm is surrounded by thriving coffee plants along the slopes and high-yielding fodder crops grown specifically to provide quality nutrition for the animals.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button className="rounded-2xl bg-green-700 hover:bg-green-800 px-6 py-6">Learn More</Button>
              <Button variant="outline" className="rounded-2xl px-6 py-6 border-green-700 text-green-800">Our Farming Approach: Utilizing available little resources to achieve maximum yield</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] bg-gradient-to-br from-green-700 to-lime-600 p-8 shadow-2xl"
          >
            <div className="bg-white/95 rounded-[1.5rem] p-8 min-h-[360px] flex flex-col justify-center">
              <Sprout className="text-green-700 mb-6" size={56} />
              <h3 className="text-3xl font-bold text-green-900">A farm shaped by nature</h3>
              <p className="mt-4 text-slate-700 leading-7">
                The farm combines dairy farming, coffee growing, and sustainable fodder production in a clean and productive environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-10">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-3xl shadow-sm">
              <CardContent className="p-7">
                <Milk className="text-green-700 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Quality Milk Production</h3>
                <p className="text-slate-700 leading-7">We produce quality milk through proper feeding, hygiene, and animal care.</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl shadow-sm">
              <CardContent className="p-7">
                <Leaf className="text-green-700 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">High-Yielding Fodder</h3>
                <p className="text-slate-700 leading-7">Nutritious fodder crops help keep the animals healthy and productive.</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl shadow-sm">
              <CardContent className="p-7">
                <Coffee className="text-green-700 mb-4" size={40} />
                <h3 className="text-xl font-bold mb-3">Coffee Slopes</h3>
                <p className="text-slate-700 leading-7">Coffee plants along the slopes create a beautiful and sustainable farm environment.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-green-900 mb-5">About Hill Haven Dairy Farm</h2>
            <p className="text-slate-700 leading-8 mb-4">
              The farm focuses on quality milk production, sustainable livestock management, and efficient farming practices through proper animal nutrition, healthcare, and modern dairy techniques.
            </p>
            <p className="text-slate-700 leading-8">
              Hill Haven Dairy Farm is committed to promoting productivity, animal welfare, and sustainable agriculture while maintaining a clean and environmentally friendly farming environment.
            </p>
          </div>
          <div className="bg-green-900 text-white rounded-[2rem] p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-5">Our Values</h3>
            <ul className="space-y-4 text-green-50">
              <li>✓ Healthy and well-fed animals</li>
              <li>✓ Clean and hygienic milk production</li>
              <li>✓ Sustainable use of farm resources</li>
              <li>✓ Reliable fodder production</li>
              <li>✓ Respect for the natural environment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Visit or Contact Us</h2>
          <p className="text-green-50 max-w-2xl mx-auto mb-8">
            For farm visits, milk inquiries, partnerships, or more information about Hill Haven Dairy Farm, reach out to us.
          </p>
          <div className="grid md:grid-cols-3 gap-5 text-left">
            <div className="bg-white/10 rounded-3xl p-6">
              <MapPin className="mb-3" />
              <h3 className="font-bold">Location</h3>
              <p className="text-green-50">Eldama Ravine, Benonin Location</p>
            </div>
            <div className="bg-white/10 rounded-3xl p-6">
              <Phone className="mb-3" />
              <h3 className="font-bold">Phone</h3>
              <p className="text-green-50">0727305836 / 0722945473</p>
            </div>
            <div className="bg-white/10 rounded-3xl p-6">
              <Mail className="mb-3" />
              <h3 className="font-bold">Email</h3>
              <p className="text-green-50">hillhavendairyfarm@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-green-950 text-green-50 py-6 text-center">
        <p>© {new Date().getFullYear()} Hill Haven Dairy Farm. All rights reserved.</p>
      </footer>
    </div>
  );
}
