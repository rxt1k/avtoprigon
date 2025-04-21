// Database Management System
const Database = {
    // Initialize the database
    init() {
        // Initialize users collection if it doesn't exist
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }
        
        // Initialize orders collection if it doesn't exist
        if (!localStorage.getItem('orders')) {
            localStorage.setItem('orders', JSON.stringify([]));
        }
        
        // Initialize cars collection if it doesn't exist
        if (!localStorage.getItem('cars')) {
            localStorage.setItem('cars', JSON.stringify([]));
        }
    },

    // User Management
    users: {
        // Get all users
        getAll() {
            return JSON.parse(localStorage.getItem('users')) || [];
        },

        // Get user by ID
        getById(id) {
            const users = this.getAll();
            return users.find(user => user.id === id);
        },

        // Get user by email
        getByEmail(email) {
            const users = this.getAll();
            return users.find(user => user.email === email);
        },

        // Create new user
        create(userData) {
            const users = this.getAll();
            const newUser = {
                id: Date.now().toString(),
                ...userData,
                createdAt: new Date().toISOString(),
                orders: [],
                isAdmin: false
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            return newUser;
        },

        // Update user
        update(id, userData) {
            const users = this.getAll();
            const index = users.findIndex(user => user.id === id);
            if (index !== -1) {
                users[index] = {
                    ...users[index],
                    ...userData,
                    updatedAt: new Date().toISOString()
                };
                localStorage.setItem('users', JSON.stringify(users));
                return users[index];
            }
            return null;
        },

        // Delete user
        delete(id) {
            const users = this.getAll();
            const filteredUsers = users.filter(user => user.id !== id);
            localStorage.setItem('users', JSON.stringify(filteredUsers));
        },

        // Add order to user
        addOrder(userId, orderId) {
            const users = this.getAll();
            const index = users.findIndex(user => user.id === userId);
            if (index !== -1) {
                if (!users[index].orders) {
                    users[index].orders = [];
                }
                users[index].orders.push(orderId);
                localStorage.setItem('users', JSON.stringify(users));
                return true;
            }
            return false;
        }
    },

    // Order Management
    orders: {
        // Get all orders
        getAll() {
            return JSON.parse(localStorage.getItem('orders')) || [];
        },

        // Get order by ID
        getById(id) {
            const orders = this.getAll();
            return orders.find(order => order.id === id);
        },

        // Get orders by user ID
        getByUserId(userId) {
            const orders = this.getAll();
            return orders.filter(order => order.userId === userId);
        },

        // Create new order
        create(orderData) {
            const orders = this.getAll();
            const newOrder = {
                id: Date.now().toString(),
                ...orderData,
                createdAt: new Date().toISOString(),
                status: 'Pending'
            };
            orders.push(newOrder);
            localStorage.setItem('orders', JSON.stringify(orders));
            return newOrder;
        },

        // Update order
        update(id, orderData) {
            const orders = this.getAll();
            const index = orders.findIndex(order => order.id === id);
            if (index !== -1) {
                orders[index] = {
                    ...orders[index],
                    ...orderData,
                    updatedAt: new Date().toISOString()
                };
                localStorage.setItem('orders', JSON.stringify(orders));
                return orders[index];
            }
            return null;
        },

        // Delete order
        delete(id) {
            const orders = this.getAll();
            const filteredOrders = orders.filter(order => order.id !== id);
            localStorage.setItem('orders', JSON.stringify(filteredOrders));
        }
    },

    // Car Management
    cars: {
        // Get all cars
        getAll() {
            return JSON.parse(localStorage.getItem('cars')) || [];
        },

        // Get car by ID
        getById(id) {
            const cars = this.getAll();
            return cars.find(car => car.id === id);
        },

        // Create new car
        create(carData) {
            const cars = this.getAll();
            const newCar = {
                id: Date.now().toString(),
                ...carData,
                createdAt: new Date().toISOString()
            };
            cars.push(newCar);
            localStorage.setItem('cars', JSON.stringify(cars));
            return newCar;
        },

        // Update car
        update(id, carData) {
            const cars = this.getAll();
            const index = cars.findIndex(car => car.id === id);
            if (index !== -1) {
                cars[index] = {
                    ...cars[index],
                    ...carData,
                    updatedAt: new Date().toISOString()
                };
                localStorage.setItem('cars', JSON.stringify(cars));
                return cars[index];
            }
            return null;
        },

        // Delete car
        delete(id) {
            const cars = this.getAll();
            const filteredCars = cars.filter(car => car.id !== id);
            localStorage.setItem('cars', JSON.stringify(filteredCars));
        }
    }
};

// Initialize the database when the script loads
Database.init();

// Export the database object
window.Database = Database; 