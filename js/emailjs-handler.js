/**
 * EmailJS Form Handler for Satyam Singh Portfolio
 * Sends the confirmation email directly to the VISITOR who filled out the form.
 * 
 * 3-Step Setup:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Connect your Email Service (e.g. Gmail) -> Copy "Service ID"
 * 3. Create an Email Template:
 *    - In "To Email" field, enter: {{from_email}}
 *    - In "Subject", enter: Thanks for reaching out! | Satyam Singh
 *    - In "Content", paste your HTML template from email-templates/visitor-autoreply-template.html
 *    - Copy "Template ID"
 * 4. Paste your 3 keys below:
 */

const EMAILJS_CONFIG = {
  publicKey: "YOUR_PUBLIC_KEY",   // From EmailJS Dashboard > Account > Public Key
  serviceId: "YOUR_SERVICE_ID",   // From EmailJS Dashboard > Email Services
  templateId: "YOUR_TEMPLATE_ID"  // From EmailJS Dashboard > Email Templates
};

(function initVisitorEmailIntegration() {
  function setup() {
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
          submitBtn.value = 'Sending confirmation...';
        } else {
          submitBtn.textContent = 'Sending confirmation...';
        }
      }

      // Parameters sent to your EmailJS template
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        reply_to: 'contact.ksatyam@gmail.com'
      };

      try {
        const isConfigured = window.emailjs && 
          EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' &&
          EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
          EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.templateId !== 'YOUR_TEMPLATE_ID';

        if (isConfigured) {
          // Dispatches email directly to visitor's email address
          await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams);
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
              Thank you, ${name}!
            </div>
            <p style="color: #222; font-size: 0.9rem; margin: 0; line-height: 1.4;">
              A confirmation email has been sent directly to <strong>${email}</strong>. I will get back to you within 24 hours.
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
              Unable to send confirmation email right now.
            </div>
            <p style="font-size: 0.88rem; margin: 0;">
              Please reach out directly at <a href="mailto:contact.ksatyam@gmail.com" style="color: #a4f564; text-decoration: underline;">contact.ksatyam@gmail.com</a>.
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
