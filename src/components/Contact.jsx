import React from "react";
import {
  Github,
  Dribbble,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Pointer,
} from "lucide-react";
import emailjs from 'emailjs-com'
import Modal from './Modal'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID, RECEIVER_EMAIL } from '../share/emailConfig'
import { useState } from 'react'

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  React.useEffect(() => {
    try {
      if (EMAILJS_USER_ID && EMAILJS_USER_ID !== 'vGePn3EILzQ3nHAAR') {
        emailjs.init(EMAILJS_USER_ID)
      }
    } catch (e) {
      console.warn('EmailJS init failed', e)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    const form = e.target
    const formData = {
      from_name: form.name?.value || form.elements[0]?.value || 'Anonymous',
      from_email: form.email?.value || form.elements[0]?.value,
      message: form.message?.value || form.elements[1]?.value,
      to_email: RECEIVER_EMAIL
    }

    if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'service_bgqn7mq') {
      // No emailjs configured — still show confirmation and log data
      console.warn('EmailJS not configured. Replace ids in src/share/emailConfig.js')
      setModalMessage('Message queued locally (EmailJS not configured).')
      setModalOpen(true)
      form.reset()
      return
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_USER_ID)
      .then(() => {
        setModalMessage('Message sent — thank you!')
        setModalOpen(true)
        form.reset()
      }, (err) => {
        console.error('EmailJS error', err)
        setModalMessage('Failed to send message. Please try later.')
        setModalOpen(true)
      })
  }


  return (
    <>
      <section id="contacts" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-purple-400">#</span>contacts
            <div className="h-0 w-96 ml-5 border border-purple-400"></div>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="absolute left-6 grid grid-cols-3 gap-1">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-gray-600 rounded-full"
                  ></div>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md selection:text-black selection:bg-purple-400">
                I'm interested in freelance opportunities. However, if you have
                other request or question, don't hesitate to contact me
              </p>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-700 p-4">
                <h3 className="font-bold mb-2">Message me here</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2 text-gray-400">
                    <form onSubmit={sendEmail} className="w-full">
                      <input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        required
                        className="bg-transparent mb-2 border border-gray-400 rounded w-full p-2 outline-offset-1"
                      />
                      <input
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="bg-transparent border border-gray-400 rounded w-full p-2 outline-offset-1 mb-2"
                      />
                      <textarea
                        name="message"
                        placeholder="Type Message"
                        required
                        className="bg-transparent border border-gray-400 rounded w-full p-2 outline-offset-1 h-32 resize-none"
                      />
                      <button
                        type="submit"
                        className="mt-3 ml-0 p-2 bg-green-600 text-white font-semibold hover:bg-green-700 rounded-lg w-full"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-all cursor-pointer space-x-2 text-gray-400 ml-2">
                    <span className="hover:rotate-[7deg] transition-all">
                      ✉️
                    </span>
                    <a href="mailto:bansalyash316@gmail.com">
                      <span>bansalyash316@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Contact">
        <p className="text-sm text-gray-300">{modalMessage}</p>
      </Modal>
    </>
  );
}
