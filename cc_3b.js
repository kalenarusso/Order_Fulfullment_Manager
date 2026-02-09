//Step 2
let inventory = [
    {sku: "SKU-200", name: "Widget", price: 25.00, stock: 100},
    {sku: "SKU-201", name: "Gadget", price: 15.00, stock: 200},
    {sku: "SKU-202", name: "Gum", price: 5.00, stock: 300}
    {sku: "SKU-203", name: "Glue", price: 6.00, stock: 150}
];

inventory.forEach((inventory) => {console.log(`${inventory.sku} | ${inventory.name} | $${inventory.price} | ${inventory.stock}`)});

//Step 3
let removedItem = inventory.pop(); // removes the last item in the array and returns it
console.log(`Removed item: ${removedItem.sku} | ${removedItem.name}`);

let newInventory = [
    {sku: "SKU-204", name: "Pencil", price: 3.00, stock: 5}
];
inventory.push(newInventory[0]);

inventory[1].price = 20.00; // updated price of the second item in the inventory
inventory[0].quantity += 10; restocked the first item in the inventory by adding 10 to its quantity

console.log(" ");
console.log("Updated Inventory: ");
inventory.forEach((inventory) => {console.log(`${inventory.sku} | ${inventory.name} | $${inventory.price} |Stock: ${inventory.stock}`)});

//Step 4
console.log(" ");

let orders = [
    {orderId: "ORDER-001",
        items: [
            {name: "Widget", sku: "SKU-200", stock: 10},
            {name: "Gadget", sku: "SKU-201", stock: 200},
        ]}
        {orderId: "ORDER-002",
            items: [
                {name: "Gum", sku: "SKU-202", stock: 300},
                {name: "Glue", sku: "SKU-203", stock: 150}
            ]}
];

orders.forEach((order) => [
    console.log(`Processing ${order.orderId}:`);
    let orderTotal = 0;
    
    order.items.forEach((item) =. {
        let inventoryItem = inventory.find((inv) => inv.sku === item.sku);
        if (inventoryItem && inventoryItem.stock >= item.stock)
        {
            inventoryItem.quantity -= item.stock;
            let itemTotal = item.stoock * inventoryItem.price;
            console.log(`- ${item.name} (${item.sku}): $$(itemTotal]`);
            orderTotal += itemTotal;
        }
        else {
            console.log(`Insufficient stock for ${item.name} (${item.sku})`}
            }
        });
        console.log(`Order Total: $${orderTotal}`);
        console.log(" ");

    });

    //Step 5
    console.log(" ");

    let totalInventoryValue = inventory.reduce((totalValue, item) +> totalValue + (item.price * item.stock), 0);
    console.log(`Total Inventory Value: $${totalInventoryValue}`);
    console.log(" ");

    let lowStockItems = inventory.filter(item => item.stock <= 5);
console.log(`Low Stock Items: `);
    console.log(lowStockItems);
    console.log(" ");

    let priceList = inventory.map((item) => ({sku: item.sku, name: item.name, price: item.price}));
    console.log(`Price List: `);
    console.log(priceList);
    
