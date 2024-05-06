import emailjs from '@emailjs/browser';

export function sendEmail(e: any) {
emailjs.sendForm("service_d732e1j", "template_92hd2fp", e.target, "erNh8UJW-79qQcO4o")
    .then((result) => {
      console.log('SUCCESS!', result.text);

      e.target.reset();
    }, (error) => {
      console.log('FAILED...', error.text);
    });
}