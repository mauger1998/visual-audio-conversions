document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contact')
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault()
            // form validation
            var name = document.getElementById('name') // name
            var email = document.getElementById('email') // email
            var phone = document.getElementById('phone') // phone
            var message = document.getElementById('message') // message

            var fields = [name, email, phone, message]
            var isValid = true

            fields.forEach((field) => {
                if (field.value === '') {
                    field.classList.add('invalid')
                    isValid = false
                } else {
                    field.classList.remove('invalid')
                }
            })

            if (!isValid) {
                alert('All fields are required.')
                return
            }

            // reCAPTCHA validation
            var response = grecaptcha.getResponse()
            if (response.length == 0) {
                alert('reCAPTCHA is mandatory.')
                return
            }

            // send email
            emailjs.init('vq_k1I6V4Q76GWaCf') // replace with your EmailJS user ID
            emailjs
                .send('service_xsge35q', 'template_5ofolua', {
                    // replace with your EmailJS service ID and template ID
                    name: name.value,
                    email: email.value,
                    phone: phone.value,
                    message: message.value,
                    'g-recaptcha-response': response,
                })
                .then(
                    function (response) {
                        name.value = ''
                        email.value = ''
                        phone.value = ''
                        message.value = ''

                        window.location.href = '/thank-you/'
                    },
                    function (error) {
                        console.log('FAILED...', error)
                    }
                )
        })
    } else {
        console.error('Form not found')
    }
})

document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')

    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})
