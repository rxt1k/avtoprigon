// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the car data
  const cars = [
    {
      id: 1,
      make: "BMW",
      model: "M5",
      year: 2023,
      price: 105000,
      mileage: 1500,
      color: "Black",
      transmission: "Automatic",
      fuel: "Petrol",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description:
        "The BMW M5 is a high-performance variant of the BMW 5 Series marketed under the BMW M sub-brand. It is considered an iconic vehicle in the sports sedan category.",
    },
    {
      id: 2,
      make: "Mercedes",
      model: "S-Class",
      year: 2023,
      price: 120000,
      mileage: 1000,
      color: "Silver",
      transmission: "Automatic",
      fuel: "Hybrid",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description:
        "The Mercedes-Benz S-Class is a series of full-size luxury sedans produced by the German automaker Mercedes-Benz. The S-Class is the flagship vehicle for Mercedes-Benz.",
    },
    {
      id: 3,
      make: "Porsche",
      model: "911",
      year: 2023,
      price: 150000,
      mileage: 500,
      color: "Red",
      transmission: "Automatic",
      fuel: "Petrol",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description:
        "The Porsche 911 is a two-door, 2+2 high-performance rear-engined sports car. It has a distinctive design, rear-engine configuration, and round headlights.",
    },
    {
      id: 4,
      make: "Audi",
      model: "R8",
      year: 2023,
      price: 160000,
      mileage: 800,
      color: "Blue",
      transmission: "Automatic",
      fuel: "Petrol",
      image:
        "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description:
        "The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system. It was introduced by the German car manufacturer Audi AG in 2006.",
    },
    {
      id: 5,
      make: "Ferrari",
      model: "488",
      year: 2022,
      price: 300000,
      mileage: 300,
      color: "Yellow",
      transmission: "Automatic",
      fuel: "Petrol",
      image:
        "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description:
        "The Ferrari 488 is a mid-engine sports car produced by the Italian automobile manufacturer Ferrari. The car is an update to the 458 with notable exterior and performance changes.",
    },
    {
      id: 6,
      make: "BMW",
      model: "X7",
      year: 2023,
      price: 95000,
      mileage: 2000,
      color: "White",
      transmission: "Automatic",
      fuel: "Diesel",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description:
        "The BMW X7 is a full-size luxury SUV manufactured by BMW. It is BMW's largest and most expensive SUV in its line-up.",
    },
    {
      id: 7,
      make: "Lamborghini",
      model: "Huracan",
      year: 2023,
      price: 250000,
      mileage: 400,
      color: "Orange",
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description: "The Lamborghini Huracán is a sports car manufactured by Italian automotive manufacturer Lamborghini. It is the successor to the Gallardo and was launched in 2014.",
    },
    {
      id: 8,
      make: "Tesla",
      model: "Model S Plaid",
      year: 2023,
      price: 130000,
      mileage: 1000,
      color: "Black",
      transmission: "Automatic",
      fuel: "Electric",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description: "The Tesla Model S Plaid is the fastest production car in the world, featuring a tri-motor setup, 1,020 horsepower, and a range of 396 miles.",
    },
    {
      id: 9,
      make: "Rolls-Royce",
      model: "Phantom",
      year: 2023,
      price: 450000,
      mileage: 200,
      color: "Silver",
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://images.unsplash.com/photo-1620120966883-d977b85b787d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description: "The Rolls-Royce Phantom is a full-sized luxury saloon manufactured by Rolls-Royce Motor Cars. It is the flagship model of Rolls-Royce.",
    },
    {
      id: 10,
      make: "McLaren",
      model: "720S",
      year: 2023,
      price: 300000,
      mileage: 300,
      color: "Blue",
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description: "The McLaren 720S is a sports car designed and manufactured by British automobile manufacturer McLaren Automotive. It is the second all-new car in the McLaren Super Series.",
    },
    {
      id: 11,
      make: "Bentley",
      model: "Continental GT",
      year: 2023,
      price: 220000,
      mileage: 500,
      color: "White",
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description: "The Bentley Continental GT is a grand tourer manufactured and marketed by British automaker Bentley Motors Limited since 2003. It was the first car released by Bentley under Volkswagen AG management.",
    },
    {
      id: 12,
      make: "Aston Martin",
      model: "DB11",
      year: 2023,
      price: 210000,
      mileage: 400,
      color: "Green",
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
      description: "The Aston Martin DB11 is a grand tourer produced by British luxury car manufacturer Aston Martin since 2016. It debuted at the Geneva Motor Show in March 2016.",
    }
  ]

  // Save cars to localStorage
  localStorage.setItem("cars", JSON.stringify(cars))

  // Initialize cars container
  const carsContainer = document.getElementById("cars-container")

  // Save orders to localStorage
  if (!localStorage.getItem("orders")) {
    const orders = [
      {
        id: "ORD-001",
        customer: "John Doe",
        car: "BMW M5",
        carId: 1,
        date: "2025-04-15",
        status: "Processing",
        userId: null, // For demo purposes
      },
      {
        id: "ORD-002",
        customer: "Jane Smith",
        car: "Mercedes S-Class",
        carId: 2,
        date: "2025-04-14",
        status: "Completed",
        userId: null, // For demo purposes
      },
    ]
    localStorage.setItem("orders", JSON.stringify(orders))
  }

  // Initialize users if not exists
  if (!localStorage.getItem("users")) {
    const users = []
    localStorage.setItem("users", JSON.stringify(users))
  }

  // Check if user is logged in
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
  const isAdmin = sessionStorage.getItem("isAdmin")

  // Update navigation based on login status
  updateNavigation()

  function updateNavigation() {
    const loginLink = document.getElementById("login-link")
    const profileLink = document.getElementById("profile-link")
    const logoutLink = document.getElementById("logout-link")

    if (loginLink && profileLink && logoutLink) {
      if (currentUser || isAdmin) {
        loginLink.style.display = "none"
        profileLink.style.display = "block"
        logoutLink.style.display = "block"

        // Add logout event listener
        const logoutBtn = logoutLink.querySelector("a")
        logoutBtn.addEventListener("click", (e) => {
          e.preventDefault()
          logout()
        })
      } else {
        loginLink.style.display = "block"
        profileLink.style.display = "none"
        logoutLink.style.display = "none"
      }
    }
  }

  // Logout function
  function logout() {
    sessionStorage.removeItem("currentUser")
    sessionStorage.removeItem("isAdmin")
    window.location.href = "index.html"
  }

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const nav = document.querySelector("nav")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active")
    })
  }

  // Tabs functionality
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  if (tabBtns.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const tabId = this.dataset.tab

        // Remove active class from all buttons and contents
        tabBtns.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))

        // Add active class to current button and content
        this.classList.add("active")
        document.getElementById(tabId).classList.add("active")
      })
    })
  }

  // Login tabs functionality
  const loginTabs = document.querySelectorAll(".login-tab")
  const loginForms = document.querySelectorAll(".login-form")

  if (loginTabs.length > 0) {
    loginTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tabId = this.dataset.tab

        // Remove active class from all tabs and forms
        loginTabs.forEach((tab) => tab.classList.remove("active"))
        loginForms.forEach((form) => form.classList.remove("active"))

        // Add active class to current tab and form
        this.classList.add("active")
        document.getElementById(tabId + "-form").classList.add("active")
      })
    })
  }

  // Profile tabs functionality
  const profileTabs = document.querySelectorAll(".profile-tab")
  const profileContents = document.querySelectorAll(".profile-content")

  if (profileTabs.length > 0) {
    profileTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tabId = this.dataset.tab

        // Remove active class from all tabs and contents
        profileTabs.forEach((tab) => tab.classList.remove("active"))
        profileContents.forEach((content) => content.classList.remove("active"))

        // Add active class to current tab and content
        this.classList.add("active")
        document.getElementById(tabId + "-content").classList.add("active")
      })
    })
  }

  // Car model dropdown population based on make
  const carMakeSelect = document.getElementById("car-make")
  const carModelSelect = document.getElementById("car-model")

  if (carMakeSelect && carModelSelect) {
    const carModels = {
      BMW: ["M5", "X7", "7 Series", "5 Series", "X5"],
      Mercedes: ["S-Class", "E-Class", "C-Class", "GLE", "GLS"],
      Porsche: ["911", "Cayenne", "Panamera", "Taycan", "Macan"],
      Audi: ["R8", "A8", "Q7", "Q8", "RS6"],
      Ferrari: ["488", "F8 Tributo", "Roma", "SF90 Stradale", "Portofino"],
    }

    carMakeSelect.addEventListener("change", function () {
      const selectedMake = this.value

      // Clear current options
      carModelSelect.innerHTML = '<option value="">Select Model</option>'

      // If a make is selected, populate models
      if (selectedMake) {
        carModels[selectedMake].forEach((model) => {
          const option = document.createElement("option")
          option.value = model
          option.textContent = model
          carModelSelect.appendChild(option)
        })
      }
    })
  }

  // Load cars into catalog
  function loadCars(filter = "all") {
    console.log("Loading cars...")
    if (!carsContainer) {
      console.error("Cars container not found")
      return
    }

    // Clear current cars
    carsContainer.innerHTML = ""

    // Get cars from localStorage
    const storedCars = JSON.parse(localStorage.getItem("cars")) || []
    console.log("Stored cars:", storedCars)

    // Filter cars if needed
    const filteredCars = filter === "all" ? storedCars : storedCars.filter((car) => car.make === filter)
    console.log("Filtered cars:", filteredCars)

    // Create car cards
    filteredCars.forEach((car) => {
      const carCard = document.createElement("div")
      carCard.className = "car-card fade-in"
      carCard.innerHTML = `
        <div class="car-image">
          <img src="${car.image}" alt="${car.make} ${car.model}">
        </div>
        <div class="car-details">
          <h3 class="car-title">${car.make} ${car.model} (${car.year})</h3>
          <div class="car-info">
            <span><i class="fas fa-tachometer-alt"></i> ${car.mileage} km</span>
            <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
            <span><i class="fas fa-cog"></i> ${car.transmission}</span>
          </div>
          <div class="car-price">$${car.price.toLocaleString()}</div>
          <div class="car-actions">
            <button class="btn view-details-btn" data-id="${car.id}">View Details</button>
            <button class="btn order-btn" data-id="${car.id}">Order Now</button>
          </div>
        </div>
      `
      carsContainer.appendChild(carCard)
    })

    // Add event listeners to buttons
    document.querySelectorAll(".view-details-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const carId = Number.parseInt(this.dataset.id)
        const car = storedCars.find((car) => car.id === carId)
        showCarDetails(car)
      })
    })

    document.querySelectorAll(".order-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const carId = Number.parseInt(this.dataset.id)
        const car = storedCars.find((car) => car.id === carId)

        // Check if user is logged in
        if (currentUser || isAdmin) {
          showOrderForm(car)
        } else {
          showLoginRequiredModal(car)
        }
      })
    })
  }

  // Load cars on page load
  console.log("Initializing page...")
  loadCars()

  // Filter cars by make
  const filterMake = document.getElementById("filter-make")

  if (filterMake) {
    filterMake.addEventListener("change", function () {
      loadCars(this.value)
    })
  }

  // Car details modal
  function showCarDetails(car) {
    // Create modal element
    const modal = document.createElement("div")
    modal.className = "modal"
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="car-details-modal">
                    <div class="car-details-image">
                        <img src="${car.image}" alt="${car.make} ${car.model}">
                    </div>
                    <div class="car-details-info">
                        <h2>${car.make} ${car.model} (${car.year})</h2>
                        <div class="car-price">$${car.price.toLocaleString()}</div>
                        <div class="car-specs">
                            <div class="car-spec-item">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>Mileage: ${car.mileage} km</span>
                            </div>
                            <div class="car-spec-item">
                                <i class="fas fa-palette"></i>
                                <span>Color: ${car.color}</span>
                            </div>
                            <div class="car-spec-item">
                                <i class="fas fa-cog"></i>
                                <span>Transmission: ${car.transmission}</span>
                            </div>
                            <div class="car-spec-item">
                                <i class="fas fa-gas-pump"></i>
                                <span>Fuel: ${car.fuel}</span>
                            </div>
                        </div>
                        <div class="car-description">
                            <h3>Description</h3>
                            <p>${car.description}</p>
                        </div>
                        <div class="car-actions">
                            <button class="btn order-btn-modal" data-id="${car.id}">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        `

    document.body.appendChild(modal)

    // Show modal
    setTimeout(() => {
      modal.style.display = "block"
    }, 10)

    // Close modal
    const closeModal = modal.querySelector(".close-modal")
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
      setTimeout(() => {
        modal.remove()
      }, 300)
    })

    // Order button
    const orderBtn = modal.querySelector(".order-btn-modal")
    orderBtn.addEventListener("click", () => {
      modal.style.display = "none"
      setTimeout(() => {
        modal.remove()

        // Check if user is logged in
        if (currentUser || isAdmin) {
          showOrderForm(car)
        } else {
          showLoginRequiredModal(car)
        }
      }, 300)
    })

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none"
        setTimeout(() => {
          modal.remove()
        }, 300)
      }
    })
  }

  // Login required modal
  function showLoginRequiredModal(car) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="login-required-modal">
                <h2>Login Required</h2>
                <p>Please login or sign up to place an order.</p>
                <div class="modal-buttons">
                    <a href="login.html" class="btn">Login</a>
                    <a href="login.html#register" class="btn">Sign Up</a>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Show modal with animation
    setTimeout(() => {
        modal.style.display = "block";
    }, 10);

    // Close modal
    const closeModal = modal.querySelector(".close-modal");
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        setTimeout(() => {
            modal.remove();
        }, 300);
    });

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
  }

  // Handle order button click
  function handleOrder(car) {
    if (!currentUser) {
      showLoginRequiredModal(car)
      return
    }
    showOrderForm(car)
  }

  // Show order form modal
  function showOrderForm(car) {
    const modal = document.createElement("div")
    modal.className = "modal"
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="order-form-modal">
                <h2>Order ${car.make} ${car.model}</h2>
                <div class="order-car-info">
                    <img src="${car.image}" alt="${car.make} ${car.model}">
                    <div class="order-car-details">
                        <h3>${car.make} ${car.model} (${car.year})</h3>
                        <div class="car-price">$${car.price.toLocaleString()}</div>
                    </div>
                </div>
                <form id="order-form">
                    <div class="form-group">
                        <label for="order-name">Full Name</label>
                        <input type="text" id="order-name" value="${currentUser ? currentUser.name : ""}" required>
                    </div>
                    <div class="form-group">
                        <label for="order-email">Email</label>
                        <input type="email" id="order-email" value="${currentUser ? currentUser.email : ""}" required>
                    </div>
                    <div class="form-group">
                        <label for="order-phone">Phone</label>
                        <input type="tel" id="order-phone" value="${currentUser ? currentUser.phone : ""}" required>
                    </div>
                    <div class="form-group">
                        <label for="order-address">Address</label>
                        <textarea id="order-address" required>${currentUser && currentUser.address ? currentUser.address : ""}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="order-payment">Payment Method</label>
                        <select id="order-payment" required>
                            <option value="">Select Payment Method</option>
                            <option value="credit-card">Credit Card</option>
                            <option value="bank-transfer">Bank Transfer</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="order-notes">Additional Notes</label>
                        <textarea id="order-notes"></textarea>
                    </div>
                    <button type="submit" class="btn">Submit Order</button>
                </form>
            </div>
        </div>
    `

    document.body.appendChild(modal)

    // Show modal
    setTimeout(() => {
      modal.style.display = "block"
    }, 10)

    // Close modal
    const closeModal = modal.querySelector(".close-modal")
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
      setTimeout(() => {
        modal.remove()
      }, 300)
    })

    // Submit order form
    const orderForm = document.getElementById("order-form")
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("order-name").value
      const email = document.getElementById("order-email").value
      const phone = document.getElementById("order-phone").value
      const address = document.getElementById("order-address").value
      const payment = document.getElementById("order-payment").value
      const notes = document.getElementById("order-notes").value

      // Generate order ID
      const orderId = "ORD-" + Math.floor(1000 + Math.random() * 9000)

      // Get current date
      const today = new Date()
      const date = today.toISOString().split("T")[0]

      // Create new order
      const newOrder = {
        id: orderId,
        customer: name,
        car: `${car.make} ${car.model}`,
        carId: car.id,
        date: date,
        status: "Processing",
        userId: currentUser ? currentUser.id : null,
        email: email,
        phone: phone,
        address: address,
        payment: payment,
        notes: notes
      }

      // Get orders from localStorage
      const orders = JSON.parse(localStorage.getItem("orders")) || []

      // Add new order
      orders.push(newOrder)

      // Save orders to localStorage
      localStorage.setItem("orders", JSON.stringify(orders))

      // Show success message
      modal.style.display = "none"
      setTimeout(() => {
        modal.remove()

        // Show success modal
        const successModal = document.createElement("div")
        successModal.className = "modal"
        successModal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-modal">&times;</span>
                        <div class="success-modal">
                            <i class="fas fa-check-circle"></i>
                            <h2>Order Placed Successfully!</h2>
                            <p>Your order has been placed successfully. Your order ID is <strong>${orderId}</strong>.</p>
                            <p>We will contact you shortly to confirm your order.</p>
                            <button class="btn close-success-btn">Close</button>
                        </div>
                    </div>
                `

        document.body.appendChild(successModal)

        // Show modal
        setTimeout(() => {
          successModal.style.display = "block"
        }, 10)

        // Close modal
        const closeSuccessModal = successModal.querySelector(".close-modal")
        const closeSuccessBtn = successModal.querySelector(".close-success-btn")

        closeSuccessModal.addEventListener("click", () => {
          successModal.style.display = "none"
          setTimeout(() => {
            successModal.remove()
          }, 300)
        })

        closeSuccessBtn.addEventListener("click", () => {
          successModal.style.display = "none"
          setTimeout(() => {
            successModal.remove()
          }, 300)
        })

        // Close modal when clicking outside
        window.addEventListener("click", (event) => {
          if (event.target === successModal) {
            successModal.style.display = "none"
            setTimeout(() => {
              successModal.remove()
            }, 300)
          }
        })
      }, 300)
    })

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none"
        setTimeout(() => {
          modal.remove()
        }, 300)
      }
    })
  }

  // Order tracking functionality
  document.addEventListener('DOMContentLoaded', function() {
    const trackOrderBtn = document.getElementById('track-order-btn');
    const orderIdInput = document.getElementById('order-id-input');
    const orderStatusDiv = document.getElementById('order-status');

    if (trackOrderBtn && orderIdInput && orderStatusDiv) {
      trackOrderBtn.addEventListener('click', function() {
        const orderId = orderIdInput.value.trim();
        
        if (!orderId) {
          showError('Please enter an order ID');
          return;
        }

        // Get orders from localStorage
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const order = orders.find(o => o.id === orderId);

        if (!order) {
          showError('Order not found. Please check your order ID and try again.');
          return;
        }

        // Display order status
        displayOrderStatus(order);
      });
    }

    function showError(message) {
      orderStatusDiv.innerHTML = `
        <div class="error-message">
          <i class="fas fa-exclamation-circle"></i>
          <p>${message}</p>
        </div>
      `;
    }

    function displayOrderStatus(order) {
      const statusClass = getStatusClass(order.status);
      const statusText = getStatusText(order.status);
      
      orderStatusDiv.innerHTML = `
        <h3>Order Details</h3>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Car:</strong> ${order.car.make} ${order.car.model}</p>
        <p><strong>Order Date:</strong> ${new Date(order.date).toLocaleDateString()}</p>
        <p><strong>Customer:</strong> ${order.customerName}</p>
        <p><strong>Status:</strong> <span class="status-badge ${statusClass}">${statusText}</span></p>
        ${order.notes ? `<p><strong>Notes:</strong> ${order.notes}</p>` : ''}
      `;
    }

    function getStatusClass(status) {
      switch(status.toLowerCase()) {
        case 'pending':
          return 'pending';
        case 'processing':
          return 'processing';
        case 'completed':
          return 'completed';
        case 'cancelled':
          return 'cancelled';
        default:
          return 'pending';
      }
    }

    function getStatusText(status) {
      switch(status.toLowerCase()) {
        case 'pending':
          return 'Pending';
        case 'processing':
          return 'Processing';
        case 'completed':
          return 'Completed';
        case 'cancelled':
          return 'Cancelled';
        default:
          return 'Pending';
      }
    }
  });

  // Add animation to elements when they come into view
  function animateOnScroll() {
    const elements = document.querySelectorAll(".fade-in")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll)

  // Run animation on page load
  animateOnScroll()

  // Search functionality
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const storedCars = JSON.parse(localStorage.getItem("cars")) || [];
    
    const filteredCars = storedCars.filter(car => {
        const carName = `${car.make} ${car.model}`.toLowerCase();
        return carName.includes(searchTerm);
    });

    displaySearchResults(filteredCars);
  }

  function displaySearchResults(cars) {
    const carsContainer = document.getElementById('cars-container');
    if (!carsContainer) return;

    carsContainer.innerHTML = '';
    
    if (cars.length === 0) {
        carsContainer.innerHTML = `
            <div class="no-results">
                <h3>No cars found matching your search</h3>
                <p>Try adjusting your search terms</p>
            </div>
        `;
        return;
    }

    cars.forEach(car => {
        const carCard = document.createElement("div");
        carCard.className = "car-card fade-in";
        carCard.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.make} ${car.model}">
            </div>
            <div class="car-details">
                <h3 class="car-title">${car.make} ${car.model} (${car.year})</h3>
                <div class="car-info">
                    <span><i class="fas fa-tachometer-alt"></i> ${car.mileage} km</span>
                    <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                    <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                </div>
                <div class="car-price">$${car.price.toLocaleString()}</div>
                <div class="car-actions">
                    <button class="btn view-details-btn" data-id="${car.id}">View Details</button>
                    <button class="btn order-btn" data-id="${car.id}">Order Now</button>
                </div>
            </div>
        `;
        carsContainer.appendChild(carCard);
    });

    // Add event listeners to buttons
    document.querySelectorAll(".view-details-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const carId = Number.parseInt(this.dataset.id);
            const car = storedCars.find((car) => car.id === carId);
            showCarDetails(car);
        });
    });

    document.querySelectorAll(".order-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const carId = Number.parseInt(this.dataset.id);
            const car = storedCars.find((car) => car.id === carId);

            // Check if user is logged in
            if (currentUser || isAdmin) {
                showOrderForm(car);
            } else {
                showLoginRequiredModal(car);
            }
        });
    });
  }

  // Event listeners
  searchInput.addEventListener('input', performSearch);
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
  });

  // Initial load
  loadCars();
})

// User Registration
function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }

    // Check if user already exists
    const existingUser = Database.users.getByEmail(email);
    if (existingUser) {
        showMessage('Email already registered', 'error');
        return;
    }

    // Create new user
    const newUser = Database.users.create({
        username,
        email,
        password, // Note: In a real application, you should hash the password
        isAdmin: false
    });

    if (newUser) {
        showMessage('Registration successful! Please login.', 'success');
        // Switch to login tab
        document.querySelector('.login-tab').click();
    } else {
        showMessage('Registration failed', 'error');
    }
}

// User Login
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check for admin credentials
    if (username === "admin" && password === "admin123") {
        // Set admin session
        sessionStorage.setItem("isAdmin", "true");
        sessionStorage.setItem("currentUser", JSON.stringify({ username: "admin" }));
        
        // Redirect to admin panel
        window.location.href = "admin.html";
        return;
    }
    
    // Check regular user credentials
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
}

// Handle Order
function handleOrder(carId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        showLoginRequiredModal();
        return;
    }

    const car = Database.cars.getById(carId);
    if (!car) {
        showMessage('Car not found', 'error');
        return;
    }

    showOrderForm(car);
}

// Show Order Form
function showOrderForm(car) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content order-form-modal">
            <span class="close-modal">&times;</span>
            <h2>Place Order</h2>
            <div class="order-car-info">
                <img src="${car.image}" alt="${car.name}">
                <div class="order-car-details">
                    <h3>${car.name}</h3>
                    <p class="car-price">$${car.price.toLocaleString()}</p>
                </div>
            </div>
            <form id="order-form">
                <div class="form-section">
                    <h3>Personal Information</h3>
                    <div class="form-group">
                        <label for="full-name">Full Name</label>
                        <input type="text" id="full-name" value="${currentUser.username}" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" value="${currentUser.email}" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" required>
                    </div>
                </div>

                <div class="form-section">
                    <h3>Delivery Address</h3>
                    <div class="form-group">
                        <label for="street">Street Address</label>
                        <input type="text" id="street" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" required>
                        </div>
                        <div class="form-group">
                            <label for="state">State</label>
                            <input type="text" id="state" required>
                        </div>
                        <div class="form-group">
                            <label for="zip">ZIP Code</label>
                            <input type="text" id="zip" required>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <h3>Payment Information</h3>
                    <div class="form-group">
                        <label for="payment-method">Payment Method</label>
                        <select id="payment-method" required>
                            <option value="">Select Payment Method</option>
                            <option value="credit">Credit Card</option>
                            <option value="debit">Debit Card</option>
                            <option value="bank">Bank Transfer</option>
                        </select>
                    </div>
                    <div id="credit-card-details" style="display: none;">
                        <div class="form-group">
                            <label for="card-number">Card Number</label>
                            <input type="text" id="card-number" placeholder="1234 5678 9012 3456">
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="expiry">Expiry Date</label>
                                <input type="text" id="expiry" placeholder="MM/YY">
                            </div>
                            <div class="form-group">
                                <label for="cvv">CVV</label>
                                <input type="text" id="cvv" placeholder="123">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <h3>Additional Information</h3>
                    <div class="form-group">
                        <label for="delivery-date">Preferred Delivery Date</label>
                        <input type="date" id="delivery-date" required>
                    </div>
                    <div class="form-group">
                        <label for="notes">Special Instructions</label>
                        <textarea id="notes" rows="3"></textarea>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
                    <button type="submit" class="btn-primary">Place Order</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'block';

    // Handle payment method change
    const paymentMethod = document.getElementById('payment-method');
    const creditCardDetails = document.getElementById('credit-card-details');
    paymentMethod.addEventListener('change', function() {
        creditCardDetails.style.display = this.value === 'credit' ? 'block' : 'none';
    });

    // Handle form submission
    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const orderData = {
            userId: currentUser.id,
            carId: car.id,
            carName: car.name,
            carPrice: car.price,
            customerInfo: {
                name: document.getElementById('full-name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value
            },
            deliveryAddress: {
                street: document.getElementById('street').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                zip: document.getElementById('zip').value
            },
            paymentInfo: {
                method: document.getElementById('payment-method').value,
                cardNumber: document.getElementById('card-number').value,
                expiry: document.getElementById('expiry').value,
                cvv: document.getElementById('cvv').value
            },
            additionalInfo: {
                deliveryDate: document.getElementById('delivery-date').value,
                notes: document.getElementById('notes').value
            }
        };

        // Create order
        const order = Database.orders.create(orderData);
        
        // Add order to user
        Database.users.addOrder(currentUser.id, order.id);

        // Show success message
        showSuccessModal(order.id);
        
        // Close the order form
        closeModal();
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal when clicking close button
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeModal);
}
