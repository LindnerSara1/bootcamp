class Product {
    static id = 1;
    constructor(productName, category, price, quantity) {
        this.productName = productName;
        this.id = Product.id++;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }
    updateN = () => {
        this.productName = document.getElementById('editProductName').value.trim();
        //ריקון ערך ה input
        document.getElementById('editProductName').value = '';
        return
    }
    updateC = () => {
        this.category = document.getElementById('editCategory').value.trim();
        //ריקון ערך ה input
        document.getElementById('editCategory').value = '';
        return
    }
    updateP = () => {
        this.price = document.getElementById('editPrice').value.trim();
        //ריקון ערך ה input
        document.getElementById('editPrice').value = '';
        return
    }
    updateQ = () => {
        this.quantity = document.getElementById('editQuantity').value.trim();
        //ריקון ערך ה input
        document.getElementById('editQuantity').value = '';
        return
    }

}
class Store {
    arrProducts = [new Product("book", "a", 45, 47), new Product("dress", "b", 70, 20)];
    static start = 0;

    constructor() {

    }
    searchByName = () => {
        const name = document.getElementById('searchByName').value.trim();
        const arr = this.arrProducts.filter(p => p.productName === name);
        //עדכון תצוגת המוצרים החדשה
        document.getElementById('content').innerHTML = "";
        document.getElementById('store').append(shop.ShowAllProducts(arr));
    }
    searchByCategory = () => {
        const select = document.querySelector('#category').value.trim();
        const arr = this.arrProducts.filter(p => p.category === select);
        //עדכון תצוגת המוצרים החדשה
        document.getElementById('content').innerHTML = "";
        document.getElementById('store').append(shop.ShowAllProducts(arr));
    }
    searchByRange = () => {
        const bootom = document.getElementById('buttomRange').value.trim();
        const top = document.getElementById('topRange').value.trim();
        const arr = this.arrProducts.filter(p => p.price >= bootom && p.price <= top);
        //עדכון תצוגת המוצרים החדשה
        document.getElementById('content').innerHTML = "";
        document.getElementById('store').append(shop.ShowAllProducts(arr));
    }
    searchByOutOfStock = () => {
        const arr = this.arrProducts.filter(p => p.quantity <= 10);
        //עדכון תצוגת המוצרים החדשה
        document.getElementById('content').innerHTML = "";
        document.getElementById('store').append(shop.ShowAllProducts(arr));
    }
    allProducts = () => {
        document.getElementById('content').innerHTML = "";
        document.getElementById('store').append(shop.ShowAllProducts(this.arrProducts));
    }
    updateName = () => {
        const idSelect = document.getElementById('selectedId').value.trim();
        if (idSelect > this.arrProducts.length) {
            alert("ERROR:id product not exists");
        }
        else {
            this.arrProducts[idSelect].updateN();
            //עדכון תצוגת המוצרים החדשה
            document.getElementById('content').innerHTML = "";
            document.getElementById('store').append(shop.ShowAllProducts(this.arrProducts));
        }
    }
    updateCategory = () => {
        const idSelect = document.getElementById('selectedId').value.trim();
        if (idSelect > this.arrProducts.length) {
            alert("ERROR:id product not exists");
        }
        else {
            this.arrProducts[idSelect].updateC();
            //עדכון תצוגת המוצרים החדשה
            document.getElementById('content').innerHTML = "";
            document.getElementById('store').append(shop.ShowAllProducts(this.arrProducts));
        }
    }
    updatePrice = () => {
        const idSelect = document.getElementById('selectedId').value.trim();
        if (idSelect > this.arrProducts.length) {
            alert("ERROR:id product not exists");
        }
        else {
            this.arrProducts[idSelect].updateP();
            //עדכון תצוגת המוצרים החדשה
            document.getElementById('content').innerHTML = "";
            document.getElementById('store').append(shop.ShowAllProducts(this.arrProducts));
        }
    }
    updateQuantity = () => {
        const idSelect = document.getElementById('selectedId').value.trim();
        if (idSelect > this.arrProducts.length) {
            alert("ERROR:id product not exists");
        }
        else {
            this.arrProducts[idSelect].updateQ();
            //עדכון תצוגת המוצרים החדשה
            document.getElementById('content').innerHTML = "";
            document.getElementById('store').append(shop.ShowAllProducts(this.arrProducts));
        }
    }

    //ריקון ערך ה input
    clean = () => {
        const form = document.getElementById('formAddProduct');
        form.addProductName.value = '';
        form.addCategory.value = '';
        form.addPrice.value = '';
        form.addQuantity.value = '';
    }
    //הוספת מוצר חדש לחנות
    addProduct = () => {
        //קבלת הערכים מהמשתמש
        const form = document.getElementById('formAddProduct');
        const productName = form.addProductName.value.trim();
        const category = form.addCategory.value.trim();
        const price = form.addPrice.value.trim();
        const quantity = form.addQuantity.value.trim();
        const newProduct = new Product(productName, category, price, quantity);
        // הוספת המוצר החדש לחנות
        this.arrProducts.push(newProduct);
        //הוספת המוצר החדש לתצוגה 
        const ar = [];
        ar.push(newProduct);
        document.getElementById('store').append(this.ShowAllProducts(ar));
        //ריקון ערך ה input
        this.clean();
    }
    //יצירת הדום של המוצר
    show = (txt, div, fontSize = "h3") => {
        const property = document.createElement(fontSize);
        property.innerHTML = txt;
        div.append(property);
    }
    //פונקציה להצגת המוצרים בחנות
    ShowAllProducts = (array) => {
        const content = document.getElementById('content');

        const arr = array.map(product => {
            //יצירת הדיב שעוטף את המוצר
            const productDiv = document.createElement('div');
            productDiv.classList.add('div');
            //יצירת הדום של המוצר
            this.show(product.productName, productDiv, 'h1');
            this.show("code:" + product.id, productDiv);
            this.show("category:" + product.category, productDiv);
            this.show("price:" + product.price, productDiv);
            this.show("quantity:" + product.quantity, productDiv);
            return productDiv;
        })
        content.append(...arr);
        return content;
    }
}
startStore = () => {
    if (Store.start === 0) {
        shop = new Store();
        document.getElementById('store').append(shop.ShowAllProducts(shop.arrProducts));
        shop.start++;
    }
}
onload = () => startStore();