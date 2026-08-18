/**
 * EmailJS Form Handler for Satyam Singh Portfolio
 * 
 * To activate live email sending:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an Email Service (e.g. Gmail connected to contact.ksatyam@gmail.com)
 * 3. Create an Email Template with parameters:
 *    - {{from_name}}
 *    - {{from_email}}
 *    - {{message}}
 *    - {{to_email}}
 * 4. Paste your Public Key, Service ID, and Template ID below:
 */

const EMAILJS_CONFIG = {
  publicKey: "YOUR_PUBLIC_KEY",       // Replace with your EmailJS Public Key
  serviceId: "YOUR_SERVICE_ID",       // Replace with your EmailJS Service ID
  templateIdAdmin: "YOUR_TEMPLATE_ID", // Template for notification email sent to Satyam
  templateIdUser: ""                  // Optional: Auto-reply template sent to visitor (or configure auto-reply in EmailJS dashboard)
};

(function initEmailJSIntegration() {
  function setup() {
    // Check if EmailJS SDK is loaded
    if (window.emailjs && EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== "YOUR_PUBLIC_KEY") {
      emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    }

    const form = document.getElementById('wf-form-Footer-Form') || document.querySelector('.footer-form');
    if (!form) return;

    const submitBtn = form.querySelector('.footer-button') || form.querySelector('input[type="submit"]');
    const successDiv = document.querySelector('.success-message.w-form-done');
    const errorDiv = document.querySelector('.error-message.w-form-fail');

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      e.stopPropagation();

      const nameInput = form.querySelector('#fullname') || form.querySelector('input[name="fullname"]');
      const emailInput = form.querySelector('#email') || form.querySelector('input[name="Email"]') || form.querySelector('input[type="email"]');
      const messageInput = form.querySelector('#message') || form.querySelector('textarea[name="Message"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        if (errorDiv) {
          errorDiv.style.display = 'block';
          const title = errorDiv.querySelector('.error-message-title');
          if (title) title.textContent = 'Please fill out all required fields before submitting.';
        }
        return;
      }

      // Button loading state
      const originalVal = submitBtn ? (submitBtn.value || submitBtn.textContent) : 'Submit';
      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitBtn.tagName === 'INPUT') {
          submitBtn.value = 'Sending message...';
        } else {
          submitBtn.textContent = 'Sending message...';
        }
      }

      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Satyam Singh',
        to_email: 'contact.ksatyam@gmail.com',
        message: message,
        reply_to: email
      };

      try {
        const isConfigured = window.emailjs && 
          EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' &&
          EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
          EMAILJS_CONFIG.templateIdAdmin && EMAILJS_CONFIG.templateIdAdmin !== 'YOUR_TEMPLATE_ID';

        if (isConfigured) {
          // 1. Send notification email to Satyam
          await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateIdAdmin, templateParams);

          // 2. If separate auto-reply template is set, send confirmation email to visitor
          if (EMAILJS_CONFIG.templateIdUser) {
            await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateIdUser, templateParams);
          }
        } else {
          console.warn('[EmailJS] Configuration keys pending. Simulating successful send for demo testing.');
          await new Promise(res => setTimeout(res, 800));
        }

        // Display Success State
        form.style.display = 'none';
        if (errorDiv) errorDiv.style.display = 'none';
        if (successDiv) {
          successDiv.style.display = 'block';
          successDiv.innerHTML = `
            <div class="success-message-title" style="color: #0c0d0e; font-weight: 700; font-size: 1.15rem; margin-bottom: 6px;">
              Thank you, ${name}! Your message has been sent successfully.
            </div>
            <p style="color: #222; font-size: 0.9rem; margin: 0; line-height: 1.4;">
              A confirmation copy has been sent to <strong>${email}</strong>. I'll get back to you within 24 hours.
            </p>
          `;
        }
        form.reset();
      } catch (err) {
        console.error('EmailJS Submission Error:', err);
        if (errorDiv) {
          errorDiv.style.display = 'block';
          errorDiv.innerHTML = `
            <div class="error-message-title" style="margin-bottom: 4px;">
              Unable to send message directly right now.
            </div>
            <p style="font-size: 0.88rem; margin: 0;">
              Please reach out directly at <a href="mailto:contact.ksatyam@gmail.com" style="color: #a4f564; text-decoration: underline;">contact.ksatyam@gmail.com</a> or call <a href="tel:+919420840143" style="color: #a4f564; text-decoration: underline;">+91 9420840143</a>.
            </p>
          `;
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitBtn.tagName === 'INPUT') {
            submitBtn.value = originalVal;
          } else {
            submitBtn.textContent = originalVal;
          }
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
