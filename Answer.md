1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

For an e-commerce website every Product will come under a category. So, the "Product_Category" schema defines the categories for the products. Each Product_Category has a category name and description of that category. So whenever a product is created or added we need to assign it to a category by providing the created category id into it. So this category_id will act as reference to the category assigned to it. Populating the category id while getting the product will give the category details for that product.

2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

To check wether a Product table has a valid category or not, firstly we need to ensure that category_id in the product table must not be empty and should refer to a id referring category . To ensure more we can search for the category_id from the product , either by populating it or by finding it using the id. If we get NotFound error while populating or finding the category_id it means , the category_id is invalid or has been deleted.
