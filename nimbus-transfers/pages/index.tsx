
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Phone, Send } from "lucide-react";
import { useState } from "react";

export default function NimbusTransfers() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", pickup: "", drop: "" });

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="text-center py-10">
        <img src="/logo.png" alt="Nimbus Transfers Logo" className="mx-auto w-48 mb-4" />
        <h1 className="text-3xl font-bold">Nimbus Transfers</h1>
        <p className="text-sm text-orange-300">Driven by Trust. Powered by Comfort.</p>
      </div>
      <section className="px-6 py-4 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Fixed Pricing</h2>
        <Card>
          <CardContent>
            <ul className="space-y-2">
              <li>Villeneuve-le-Roi ➝ CDG Airport – €60</li>
              <li>Villeneuve-le-Roi ➝ Orly Airport – €35</li>
              <li>Villeneuve-le-Roi ➝ Beauvais Airport – €120</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section className="px-6 py-4 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Book Your Transfer</h2>
        <Card>
          <CardContent className="space-y-3">
            <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-800 text-white" onChange={e => setForm({ ...form, name: e.target.value })} />
            <input type="text" placeholder="Phone Number" className="w-full p-2 rounded bg-gray-800 text-white" onChange={e => setForm({ ...form, phone: e.target.value })} />
            <input type="date" className="w-full p-2 rounded bg-gray-800 text-white" onChange={e => setForm({ ...form, date: e.target.value })} />
            <input type="text" placeholder="Pick-up Location" className="w-full p-2 rounded bg-gray-800 text-white" onChange={e => setForm({ ...form, pickup: e.target.value })} />
            <input type="text" placeholder="Drop-off Location" className="w-full p-2 rounded bg-gray-800 text-white" onChange={e => setForm({ ...form, drop: e.target.value })} />
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center gap-2">
              <Send size={16} /> Submit Booking
            </Button>
          </CardContent>
        </Card>
      </section>
      <div className="text-center py-6">
        <a href="https://wa.me/33775794443" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg gap-2">
          <Phone size={16} /> Contact via WhatsApp
        </a>
      </div>
      <footer className="text-center text-sm text-gray-400 py-6">
        © {new Date().getFullYear()} Nimbus Transfers. All rights reserved.
      </footer>
    </div>
  );
}
