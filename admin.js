// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Check if user is logged in as admin
    const isAdmin = sessionStorage.getItem("isAdmin")
  
    if (!isAdmin) {
      // Redirect to login page if not admin
      window.location.href = "login.html"
    }
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const nav = document.querySelector("nav")
  
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active")
      })
    }
  
    // Admin tabs functionality
    const adminTabs = document.querySelectorAll(".admin-tab")
    const adminContents = document.querySelectorAll(".admin-content")
  
    if (adminTabs.length > 0) {
      adminTabs.forEach((tab) => {
        tab.addEventListener("click", function () {
          const tabId = this.dataset.tab
  
          // Remove active class from all tabs and contents
          adminTabs.forEach((tab) => tab.classList.remove("active"))
          adminContents.forEach((content) => content.classList.remove("active"))
  
          // Add active class to current tab and content
          this.classList.add("active")
          const content = document.getElementById(tabId + "-content")
          if (content) {
            content.classList.add("active")
            
            // Load specific content based on tab
            if (tabId === "orders") {
              loadOrdersTable()
            } else if (tabId === "customers") {
              loadCustomersTable()
            }
          }
        })
      })
    }
  
    // Car management functionality
    let currentCarId = null
  
    // Add car form functionality
    const addCarBtn = document.getElementById("add-car-btn")
    const carForm = document.getElementById("car-form")
    const cancelCarBtn = document.getElementById("cancel-car-btn")
    const saveCarBtn = document.getElementById("save-car-btn")
    const formTitle = document.getElementById("form-title")
  
    // Show add car form
    if (addCarBtn) {
        addCarBtn.addEventListener("click", function() {
            currentCarId = null
            formTitle.textContent = "Add New Car"
            carForm.style.display = "block"
            addCarBtn.style.display = "none"
            document.getElementById("car-form-data").reset()
            document.getElementById("image-preview").innerHTML = `
                <i class="fas fa-cloud-upload-alt"></i>
                <p>Click to upload or drag and drop</p>
                <p class="image-format">PNG, JPG, JPEG up to 5MB</p>
            `
        })
    }
  
    // Cancel form
    if (cancelCarBtn) {
        cancelCarBtn.addEventListener("click", function() {
            carForm.style.display = "none"
            addCarBtn.style.display = "block"
            document.getElementById("car-form-data").reset()
        })
    }
  
    // Save car
    if (saveCarBtn) {
        saveCarBtn.addEventListener("click", function() {
            const carName = document.getElementById("car-name").value
            const carModel = document.getElementById("car-model").value
            const carYear = document.getElementById("car-year").value
            const carPrice = document.getElementById("car-price").value
            const carImage = document.getElementById("car-image").files[0]
            const carDescription = document.getElementById("car-description").value
  
            if (!carName || !carModel || !carYear || !carPrice || !carDescription) {
                alert("Please fill in all required fields")
                return
            }
  
            // Get existing cars
            let cars = JSON.parse(localStorage.getItem("cars")) || []
  
            if (carImage) {
                // Convert image to base64
                const reader = new FileReader()
                reader.onload = function(e) {
                    saveCarData(cars, e.target.result)
                }
                reader.readAsDataURL(carImage)
            } else if (currentCarId) {
                // Keep existing image if editing
                const existingCar = cars.find(car => car.id === currentCarId)
                if (existingCar) {
                    saveCarData(cars, existingCar.image)
                }
            } else {
                alert("Please select an image")
                return
            }
        })
    }
  
    function saveCarData(cars, imageData) {
        const carName = document.getElementById("car-name").value
        const carModel = document.getElementById("car-model").value
        const carYear = document.getElementById("car-year").value
        const carPrice = document.getElementById("car-price").value
        const carDescription = document.getElementById("car-description").value
  
        const carData = {
            id: currentCarId || Date.now(),
            name: carName,
            model: carModel,
            year: carYear,
            price: carPrice,
            image: imageData,
            description: carDescription
        }
  
        if (currentCarId) {
            // Update existing car
            const index = cars.findIndex(car => car.id === currentCarId)
            if (index !== -1) {
                cars[index] = carData
            }
        } else {
            // Add new car
            cars.push(carData)
        }
  
        // Save to localStorage
        localStorage.setItem("cars", JSON.stringify(cars))
  
        // Reset form and refresh table
        document.getElementById("car-form-data").reset()
        carForm.style.display = "none"
        addCarBtn.style.display = "block"
        loadCarsTable()
    }
  
    // Edit car
    window.editCar = function(id) {
        const cars = JSON.parse(localStorage.getItem("cars")) || []
        const car = cars.find(car => car.id === id)
        
        if (car) {
            currentCarId = id
            formTitle.textContent = "Edit Car"
            document.getElementById("car-name").value = car.name
            document.getElementById("car-model").value = car.model
            document.getElementById("car-year").value = car.year
            document.getElementById("car-price").value = car.price
            document.getElementById("car-description").value = car.description
            document.getElementById("image-preview").innerHTML = `<img src="${car.image}" style="max-width: 100%; max-height: 200px; object-fit: contain;">`
            
            carForm.style.display = "block"
            addCarBtn.style.display = "none"
        }
    }
  
    // Delete car
    window.deleteCar = function(id) {
        if (confirm("Are you sure you want to delete this car?")) {
            const cars = JSON.parse(localStorage.getItem("cars")) || []
            const updatedCars = cars.filter(car => car.id !== id)
            localStorage.setItem("cars", JSON.stringify(updatedCars))
            loadCarsTable()
        }
    }
  
    // Image preview
    const imageInput = document.getElementById("car-image")
    const imagePreview = document.getElementById("image-preview")
  
    if (imageInput && imagePreview) {
        imageInput.addEventListener("change", function() {
            const file = this.files[0]
            if (file) {
                const reader = new FileReader()
                reader.onload = function(e) {
                    imagePreview.innerHTML = `<img src="${e.target.result}" style="max-width: 100%; max-height: 200px; object-fit: contain;">`
                }
                reader.readAsDataURL(file)
            }
        })
    }
  
    // Function to load cars into the table
    function loadCarsTable() {
        const carsTableBody = document.getElementById("cars-table-body")
        const cars = JSON.parse(localStorage.getItem("cars")) || []
        
        carsTableBody.innerHTML = ""
        
        cars.forEach(car => {
            const row = document.createElement("tr")
            row.innerHTML = `
                <td><img src="${car.image}" alt="${car.name}" style="width: 50px; height: 50px; object-fit: cover;"></td>
                <td>${car.name}</td>
                <td>${car.model}</td>
                <td>${car.year}</td>
                <td>$${car.price}</td>
                <td>
                    <button class="btn" onclick="editCar(${car.id})">Edit</button>
                    <button class="btn" onclick="deleteCar(${car.id})">Delete</button>
                </td>
            `
            carsTableBody.appendChild(row)
        })
    }
  
    // Load cars table on page load
    loadCarsTable()
  
    // Load orders table
    function loadOrdersTable() {
      const ordersTableBody = document.querySelector("#orders-content table tbody")
      if (!ordersTableBody) return
  
      // Clear current rows
      ordersTableBody.innerHTML = ""
  
      // Get orders from localStorage
      const orders = JSON.parse(localStorage.getItem("orders")) || []
  
      // Create table rows
      orders.forEach((order) => {
        const row = document.createElement("tr")
        row.innerHTML = `
          <td>${order.id}</td>
          <td>${order.customer}</td>
          <td>${order.car}</td>
          <td>${order.date}</td>
          <td>
            <select class="order-status-select" data-id="${order.id}">
              <option value="Pending" ${order.status === "Pending" ? "selected" : ""}>Pending</option>
              <option value="Processing" ${order.status === "Processing" ? "selected" : ""}>Processing</option>
              <option value="Shipped" ${order.status === "Shipped" ? "selected" : ""}>Shipped</option>
              <option value="Delivered" ${order.status === "Delivered" ? "selected" : ""}>Delivered</option>
              <option value="Cancelled" ${order.status === "Cancelled" ? "selected" : ""}>Cancelled</option>
            </select>
          </td>
          <td>
            <button class="btn btn-view" data-id="${order.id}">View Details</button>
          </td>
        `
        ordersTableBody.appendChild(row)
      })
  
      // Add event listeners to status selects
      document.querySelectorAll(".order-status-select").forEach((select) => {
        select.addEventListener("change", function() {
          const orderId = this.dataset.id
          const newStatus = this.value
          updateOrderStatus(orderId, newStatus)
        })
      })
  
      // Add event listeners to view buttons
      document.querySelectorAll(".btn-view").forEach((btn) => {
        btn.addEventListener("click", function() {
          const orderId = this.dataset.id
          const order = orders.find(o => o.id === orderId)
          showOrderDetails(order)
        })
      })
    }
  
    // Load customers table
    function loadCustomersTable() {
      const customersTableBody = document.querySelector("#customers-content table tbody")
      if (!customersTableBody) return
  
      // Clear current rows
      customersTableBody.innerHTML = ""
  
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem("users")) || []
  
      // Create table rows
      users.forEach((user) => {
        const row = document.createElement("tr")
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.phone || "N/A"}</td>
          <td>${user.orders ? user.orders.length : 0}</td>
          <td>
            <button class="btn btn-view" data-id="${user.id}">View Details</button>
          </td>
        `
        customersTableBody.appendChild(row)
      })
    }
  
    // Update order status
    function updateOrderStatus(orderId, newStatus) {
      const orders = JSON.parse(localStorage.getItem("orders")) || []
      const orderIndex = orders.findIndex(o => o.id === orderId)
      
      if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus
        localStorage.setItem("orders", JSON.stringify(orders))
        loadOrdersTable() // Refresh the table
      }
    }
  
    // Show order details modal
    function showOrderDetails(order) {
      const modal = document.createElement("div")
      modal.className = "modal"
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <div class="order-details-modal">
            <h2>Order Details - ${order.id}</h2>
            <div class="order-info">
              <div class="info-group">
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> ${order.customer}</p>
                <p><strong>Email:</strong> ${order.email}</p>
                <p><strong>Phone:</strong> ${order.phone}</p>
                <p><strong>Address:</strong> ${order.address}</p>
              </div>
              <div class="info-group">
                <h3>Order Information</h3>
                <p><strong>Car:</strong> ${order.car}</p>
                <p><strong>Order Date:</strong> ${order.date}</p>
                <p><strong>Status:</strong> ${order.status}</p>
                <p><strong>Payment Method:</strong> ${order.payment}</p>
              </div>
              <div class="info-group">
                <h3>Additional Information</h3>
                <p><strong>Notes:</strong> ${order.notes || "None"}</p>
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
})
  
// Set admin session when page loads
window.addEventListener("load", () => {
  sessionStorage.setItem("isAdmin", "true")
})
  
// Load orders into admin table
function loadOrdersTable() {
  const ordersTableBody = document.querySelector("#orders-content table tbody");
  if (!ordersTableBody) return;

  // Clear current rows
  ordersTableBody.innerHTML = "";

  // Get orders from localStorage
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Create table rows
  orders.forEach((order) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${order.id}</td>
          <td>${order.customer}</td>
          <td>${order.car}</td>
          <td>${order.date}</td>
          <td>
              <select class="order-status-select" data-id="${order.id}">
                  <option value="Pending" ${order.status === "Pending" ? "selected" : ""}>Pending</option>
                  <option value="Processing" ${order.status === "Processing" ? "selected" : ""}>Processing</option>
                  <option value="Shipped" ${order.status === "Shipped" ? "selected" : ""}>Shipped</option>
                  <option value="Delivered" ${order.status === "Delivered" ? "selected" : ""}>Delivered</option>
                  <option value="Cancelled" ${order.status === "Cancelled" ? "selected" : ""}>Cancelled</option>
              </select>
          </td>
          <td>
              <button class="btn view-order-btn" data-id="${order.id}">View Details</button>
          </td>
      `;
      ordersTableBody.appendChild(row);
  });

  // Add event listeners to status selects
  document.querySelectorAll(".order-status-select").forEach((select) => {
      select.addEventListener("change", function() {
          const orderId = this.dataset.id;
          const newStatus = this.value;
          updateOrderStatus(orderId, newStatus);
      });
  });

  // Add event listeners to view buttons
  document.querySelectorAll(".view-order-btn").forEach((btn) => {
      btn.addEventListener("click", function() {
          const orderId = this.dataset.id;
          const order = orders.find(o => o.id === orderId);
          showOrderDetails(order);
      });
  });
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const orderIndex = orders.findIndex(o => o.id === orderId);
  
  if (orderIndex !== -1) {
      orders[orderIndex].status = newStatus;
      localStorage.setItem("orders", JSON.stringify(orders));
      loadOrdersTable(); // Refresh the table
  }
}

// Show order details modal
function showOrderDetails(order) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
      <div class="modal-content">
          <span class="close-modal">&times;</span>
          <div class="order-details-modal">
              <h2>Order Details - ${order.id}</h2>
              <div class="order-info">
                  <div class="info-group">
                      <h3>Customer Information</h3>
                      <p><strong>Name:</strong> ${order.customer}</p>
                      <p><strong>Email:</strong> ${order.email}</p>
                      <p><strong>Phone:</strong> ${order.phone}</p>
                      <p><strong>Address:</strong> ${order.address.street}, ${order.address.city}, ${order.address.state} ${order.address.zip}</p>
                  </div>
                  <div class="info-group">
                      <h3>Order Information</h3>
                      <p><strong>Car:</strong> ${order.car}</p>
                      <p><strong>Order Date:</strong> ${order.date}</p>
                      <p><strong>Status:</strong> ${order.status}</p>
                      <p><strong>Payment Method:</strong> ${order.payment}</p>
                  </div>
                  <div class="info-group">
                      <h3>Additional Information</h3>
                      <p><strong>Notes:</strong> ${order.notes || "None"}</p>
                      <p><strong>Delivery Date:</strong> ${order.deliveryDate || "Not specified"}</p>
                  </div>
              </div>
          </div>
      </div>
  `;

  document.body.appendChild(modal);

  // Show modal
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

// Load orders when orders tab is clicked
document.querySelector('.admin-tab[data-tab="orders"]').addEventListener("click", loadOrdersTable);
  
// Image Upload Handling
const imageInput = document.getElementById('car-image');
const imagePreview = document.getElementById('image-preview');
let selectedImage = null;

imageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        // Check file type
        if (!file.type.match('image.*')) {
            alert('Please select an image file (PNG, JPG, JPEG)');
            return;
        }

        // Check file size (5MB limit)
        if (file.size > 5 * 1024 * 1024) {
            alert('File size should be less than 5MB');
            return;
        }

        selectedImage = file;
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.classList.add('has-image');
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
        }

        reader.readAsDataURL(file);
    }
});

// Drag and drop functionality
imagePreview.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.style.borderColor = '#2980b9';
    this.style.background = '#f1f8ff';
});

imagePreview.addEventListener('dragleave', function(e) {
    e.preventDefault();
    this.style.borderColor = '#3498db';
    this.style.background = '#f8f9fa';
});

imagePreview.addEventListener('drop', function(e) {
    e.preventDefault();
    this.style.borderColor = '#3498db';
    this.style.background = '#f8f9fa';

    const file = e.dataTransfer.files[0];
    if (file) {
        imageInput.files = e.dataTransfer.files;
        const event = new Event('change');
        imageInput.dispatchEvent(event);
    }
});

// Save car function
document.getElementById('save-car-btn').addEventListener('click', function() {
    const carData = {
        name: document.getElementById('car-name').value,
        model: document.getElementById('car-model').value,
        year: document.getElementById('car-year').value,
        price: document.getElementById('car-price').value,
        description: document.getElementById('car-description').value,
        image: selectedImage ? URL.createObjectURL(selectedImage) : null
    };

    // Here you would typically send the data to your server
    // For now, we'll just log it
    console.log('Car data:', carData);
    
    // Reset form
    document.getElementById('car-form').style.display = 'none';
    imagePreview.classList.remove('has-image');
    imagePreview.innerHTML = `
        <i class="fas fa-cloud-upload-alt"></i>
        <p>Click to upload or drag and drop</p>
        <p class="image-format">PNG, JPG, JPEG up to 5MB</p>
    `;
    selectedImage = null;
});

// Cancel button
document.getElementById('cancel-car-btn').addEventListener('click', function() {
    document.getElementById('car-form').style.display = 'none';
    imagePreview.classList.remove('has-image');
    imagePreview.innerHTML = `
        <i class="fas fa-cloud-upload-alt"></i>
        <p>Click to upload or drag and drop</p>
        <p class="image-format">PNG, JPG, JPEG up to 5MB</p>
    `;
    selectedImage = null;
});
  