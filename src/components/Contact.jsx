import { Instagram, Linkedin, Mail, PhoneCall, Send, Github } from "lucide-react"

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Have a project or want to collaborate? I'm always open to discussing new opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>

            <div className="space-y-6 items-center justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sonu714169@gmail.com"
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    sonu714169@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 items-center justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone Number</h4>
                  <a
                    href="tel:9835399092"
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    9835399092
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 text-white">
              <h4 className="font-semibold mb-4">Contact with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/sonu-kumar-napit-988a152a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/Sonunapit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.instagram.com/sonukr202t/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs text-white">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault()

                const form = e.target
                const name = form.name.value
                const email = form.email.value
                const message = form.message.value

                const mailtoLink = `mailto:sonu714169@gmail.com?subject=${encodeURIComponent(
                  `Portfolio message from ${name}`
                )}&body=${encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\n${message}`
                )}`

                window.location.href = mailtoLink
              }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-m font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background 
                  focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  placeholder="Sonu ....."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-m font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background 
                  focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  placeholder="Test@example.com ....."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-m font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background 
                  focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                  placeholder="your message ....."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground 
                font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95 flex items-center gap-2 justify-center"
              >
                <Send size={16} />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
