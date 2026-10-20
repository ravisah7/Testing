

function searchHostel() {
    let city = document.getElementById("city").value.toLowerCase().trim();
    let type = document.getElementById("hostelType").value;
    let hostels = document.querySelectorAll("#hostels .card");
    let found = 0;

    hostels.forEach(function(hostel) {
        let location = hostel.innerText.toLowerCase();
        let hostelType = hostel.getAttribute("data-type");

        let cityMatch = city === "" || location.includes(city);
        let typeMatch = type === "" || hostelType === type;

        if (cityMatch && typeMatch) {
            hostel.style.display = "";
            found++;
        } else {
            hostel.style.display = "none";
        }
    });

    if (city === "" && type === "") {
        document.getElementById("message").innerText =
            "Please enter a city or select a hostel type.";
    } else if (found === 0) {
        document.getElementById("message").innerText =
            "No matching hostel found.";
    } else {
        document.getElementById("message").innerText =
            found + " hostel(s) found.";
    }
}



function showDetails(name, city, rent) {
    document.getElementById("modalTitle").innerText =
        name + " - Hostel Details";

    document.getElementById("modalBody").innerHTML = `
        
       <p><strong>Hostel:</strong></p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Monthly Rent:</strong> Rs. ${rent}</p>

        <hr>
        <h5>Book Your Room</h5>

        <form id="bookingForm" onsubmit="submitBooking(event)">
            <label class="form-label" for="studentNameBooking">
                Your Name
            </label>
            <input
                type="text"
                id="studentNameBooking"
                class="form-control mb-3"
                placeholder="Enter your name"
                required>

            <label class="form-label" for="studentPhoneBooking">
                Mobile Number
            </label>
            <input
                type="tel"
                id="studentPhoneBooking"
                class="form-control mb-3"
                placeholder="Enter mobile number"
                pattern="[0-9]{10}"
                maxlength="10"
                required>

            <label class="form-label" for="roomType">
                Choose Room Type
            </label>
            <select id="roomType" class="form-select mb-3" required>
                <option value="">Select room type</option>
                <option value="1 Seater">1 Seater</option>
                <option value="2 Seater">2 Seater</option>
                <option value="4 Seater">4 Seater</option>
            </select>

            <button type="submit" class="btn btn-primary w-100">
                Submit Booking
            </button>

            <p id="bookingMessage" class="mt-3"></p>
        </form>
    `;

    const modalElement = document.getElementById("hostelModal");
    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
    modal.show();
}

function submitBooking(event) {
    event.preventDefault();

    const name = document.getElementById("studentNameBooking").value;
    const room = document.getElementById("roomType").value;

    document.getElementById("bookingMessage").innerText =
        "Thank you, " + name +
        "! Your " + room + " room booking enquiry has been submitted.";

    document.getElementById("bookingMessage").className =
        "alert alert-success mt-3";

    document.getElementById("bookingForm").reset();
}


const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("formMessage").innerText =
            "Thank you! Your enquiry has been submitted.";

        this.reset();
    });
}

