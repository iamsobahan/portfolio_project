import dashboard from '../../assets/dashboard_picture.png';
import supermarket from '../../assets/SuperMarket_report.png';
import python1 from '../../assets/linear.png';
import python2 from '../../assets/time.jpg';
import road from '../../assets/road.png';
import car from '../../assets/car.png';

import madhav from '../../assets/sales Dashboard.png';
import superstore from '../../assets/superstore.png';
import sql2 from '../../assets/erd.png';
import sql1 from '../../assets/MusicDatabaseSchema.png';
import health from '../../assets/health.png';

export const projects = [
  {
    title: 'Titash Products',
    title2: 'Sales Dashboard-2023',
  
    description:
      'Displays monthly sales revenue alongside order volumes. Notably, sales peaked early in the year and gradually declined toward the end of the year.Women accounted for 64% of total sales, while men made up 36%, suggesting a potential opportunity to further target female customers in marketing efforts.Senior women are the highest-spending demographic, followed by adult women, highlighting an opportunity for age-targeted promotions.Ajkerdeal" emerged as the top-performing sales channel with over 10,000 orders, followed by "Daraz" and "Shopjoi." Focusing on these channels may help maximize order volume and revenue. Moulvibazar led in sales revenue, with Jamalpur and Netrokona following. This information could guide regional marketing and inventory planning. 92% of orders were successfully delivered, while 8% included returns, cancellations, and refunds. The high success rate underscores effective order processing, though minor improvements in returns handling could further optimize outcomes.',
    imageUrl: `${dashboard}`,
    github: 'https://github.com/iamsobahan/Titash_products_dashboard',
  },
  {
    title: 'ABS Superstore',
    title2: 'Sales Performance Dashboard',
   
    description:
      'Displays monthly sales and profit trends, highlighting seasonal variations and growth patterns from 2010 to 2013.Notable peaks in sales may indicate promotional activities or holiday seasons. Compares sales and profit performance of regional managers (Chris, Erin, William, Sam). Chris has the highest sales, while Sam has the lowest profit margin, suggesting potential cost or discounting issues in Sam"s region. A geographical heatmap of the United States, showing total sales by state.High-performing states stand out, with the highest sales value reaching up to $1.16 million. Analyzes how discount levels affect sales in each product category.Furniture and Office Supplies show significant sales volumes despite lower discounts, indicating strong demand',
    imageUrl: `${superstore}`,
    github: 'https://github.com/iamsobahan/abs_super_shop_report', // Replace with actual image URL
  },
  {
    title: 'Supermarket',
    title2: 'Sales Dashboard',
   
    description:
      'The Super Market Dashboard provides a comprehensive view of sales, profits, and performance metrics, allowing for in-depth analysis of business trends. The Yearly Sales and Profit/Loss chart displays seasonal sales patterns, with peaks indicating promotional periods. Regional Manager"s Performance compares managers (Chris, Erin, and William), showing which regions contribute most to profits. The Order by Customer Segment visualization highlights that Consumer and Corporate segments lead in orders, while Sales and Profits by Regions shows trends across Central, East, South, and West regions. Product Category and Sub-Category Sales reveal Office Supplies as the top-selling category. Additionally, Delivery and Return Rates vary by region, with Central and East showing strong delivery performance. The dashboard also examines Order by Product Category and Shipping Mode preferences, with Regular Air being the most popular. Finally, Quantities by Product Category highlights Office Supplies as the most ordered category, indicating high demand.',
    imageUrl: `${supermarket}`,
    github: 'https://github.com/iamsobahan/experimental_analysis', // Replace with actual image URL
  },
  ,
  {
    title: 'Anonymous',
    title2: 'Road Accident Dashboard',
    
    description:
      'The dashboard shows a total of 417,883 casualties.Fatal casualties are relatively low (7,135) compared to serious (59,312) and slight (351,436) casualties.Slight casualties make up the largest portion (84.1%), followed by serious (14.2%) and fatal casualties (1.7%). Cars are involved in the highest number of casualties (333,485), indicating a major focus area for road safety measures.Motorcycles and bicycles also have significant casualty counts (33,672 and 12,798, respectively). Casualties show a consistent trend throughout the year with some minor variations. In 2022, there is a decline in the final months, which may suggest seasonal effects or the impact of interventions. The majority of casualties occur on single carriageways (309.7k), making it a high-risk area for road safety. Casualties are also more likely to occur on dry road surfaces, suggesting that surface condition plays a role but may not be the only factor. Casualties are more common in daylight conditions (73%), which may correlate with higher traffic volumes during the day.Urban areas account for 61% of casualties, while rural areas have 39%, highlighting urban road safety concerns. The dashboard includes filters for accident date and area type (rural or urban), allowing for targeted analysis of specific time periods or locations.',
    imageUrl: `${road}`,
    github: 'https://github.com/iamsobahan/road_accident_wi2_excel',
    // Replace with actual image URL
  },
];

export const powerBiProjects = [
  {
    title: 'Digital E-commerce',
    title2: 'Sales Dashboard',
    description:
      'This report provides a comprehensive analysis of profitability across various dimensions. Region-wise profit analysis highlights Maharashtra and Madhya Pradesh as top-performing regions, suggesting strong market presence. The distribution of quantity by payment mode reveals that Cash on Delivery (COD) dominates, with a substantial 44% share, followed by UPI. Monthly trends in profit indicate strong sales in the first quarter, with notable dips in July and August, pointing to possible seasonality. Category-wise, Clothing emerges as the highest profit contributor. Product-specific insights underscore Printers and Bookcases as leading sub-categories, while seller performance analysis identifies Harivansh and Madhav as top contributors.',
    imageUrl: `${madhav}`, // Replace with actual image URL
    url: 'https://app.powerbi.com/view?r=eyJrIjoiMWM2NmU5YjMtMWExOS00NzIzLWIwNjQtZGU1YTcwMTJkYzJhIiwidCI6IjY3YTAzZjcxLWJkMzktNGE4MC04MDJiLTAzMGU0NDI5MzM2NSIsImMiOjEwfQ%3D%3D',
    github: 'https://github.com/iamsobahan/e_commerce_dashboard_report',
  },
  {
    title: 'Steen ECT Report',
    title: 'Sales Performance',
    description:
      'The Sales Performance Dashboard for Steele Chain Gear provides insights into key metrics, product orders, returns, and trends. Total revenue is $24.9M, with $10.5M profit, 25.2K orders, and a 2.17% return rate. Revenue shows steady growth from 2020, peaking in mid-2021 and early 2022. Accessories are the top-selling category, while Water Bottles and Sport-100 Helmets are high-demand, low-return products. High-return items include Mountain Tire Tubes and certain helmet models. Monthly revenue rose by 3.31%, while orders slightly dropped by 0.88%. Suggested actions include focusing on popular products, investigating high-return items, and tracking monthly trends.',
    imageUrl: `${car}`, // Replace with actual image URL
    url: 'https://app.powerbi.com/view?r=eyJrIjoiZWM1ZjNkZTAtMzZmYy00MTMyLWIzZDgtOGU5OTE0MmQ5MzA5IiwidCI6IjY3YTAzZjcxLWJkMzktNGE4MC04MDJiLTAzMGU0NDI5MzM2NSIsImMiOjEwfQ%3D%3D',
    github: 'https://github.com/iamsobahan/steel_ect_report',
  },
  {
    title: 'Health care',
    title2: 'Hospital Visits',
    description:
      'The healthcare dashboard shows 500K hospital visits, with 53.49% female visitors and 46.51% male. Most visits are low-priority (202.96K), and a large majority come from metropolitan areas (369.19K). English is the primary language (228.87K), with Spanish as a significant secondary (93.54K). Key insights include balanced gender distribution, English and Spanish as the main languages, and a focus on low-priority cases. Suggested actions are expanding Spanish language support, ensuring emergency services are well-staffed for urgent cases, and concentrating resources in metropolitan areas, where most visitors are located. Total yearly patient costs reach $944,914.50.',
    imageUrl: `${health}`, // Replace with actual image URL
    url: 'https://app.powerbi.com/view?r=eyJrIjoiZWNiMDIyNjEtYTViNy00MzM5LTg2NjYtNGI3OTQ4OTg0MzFiIiwidCI6IjY3YTAzZjcxLWJkMzktNGE4MC04MDJiLTAzMGU0NDI5MzM2NSIsImMiOjEwfQ%3D%3D',
    github: 'https://github.com/iamsobahan/health_care_report',
  },
];

export const SqlProjects = [
  {
    title: 'Music Store Data Analysis with SQL',
    description:
      'This project uses SQL to analyze a music store database, focusing on customer behavior, sales trends, and artist popularity. It requires tables for employee, invoice, customer, invoice_line, track, album, artist, and genre, each populated with relevant data. Queries range from simple to advanced, such as identifying top countries by invoice count, best customers, and top music genres by country. The analysis covers questions like identifying rock music listeners and tracking spending on specific artists. To use, clone the repository, load the SQL file into your database, and run queries individually to uncover key business insights.',
    imageUrl: `${sql1}`,
    github: 'https://github.com/iamsobahan/Music_store_dataAnalysis_withSql', // Replace with actual image URL
  },
  {
    title: 'Retail Store analysis with SQL',
    description:
      'This project involves creating and analyzing a retail sales database to gain valuable business insights. The project begins with setting up a database, p1_retail_db, and creating a retail_sales table to store sales data, including transaction IDs, dates, customer demographics, product categories, and sales details. After populating the database, initial data cleaning removes any records with missing values to ensure accurate analysis. The exploratory data analysis (EDA) provides a foundational understanding of the dataset, revealing record counts, customer demographics, unique product categories, and null values.Using SQL queries, the project addresses business questions such as total sales by category, customer purchasing behaviors, high-value transactions, and monthly sales trends. A shift analysis further breaks down sales by morning, afternoon, and evening orders. The project concludes with reports summarizing customer demographics, top-spending customers, sales peaks, and product performance. This SQL-driven approach provides actionable insights into customer behaviors, seasonal trends, and category performance, empowering data-driven decision-making.',
    imageUrl: `${sql2}`,
    github: 'https://github.com/iamsobahan/Retails_analysis_sql', // Replace with actual image URL
  },
];

export const pythonProjects = [
  {
    title:
      'Predicting House Prices in Dhaka,    Bangladesh Using Linear Regression Analysis with Python',
    description: 'Explore the project to click live preview. I have used python library pandas, numpy, matplotlib to predict house prices using linear regression',
    imageUrl: `${python1}`,
    url: 'https://drive.google.com/file/d/1yrRvmJN_rEu0sXyYD1QCRDhE17OfvwYt/view?usp=sharing', // Replace with actual image URL
  },
  {
    title:
      'Forecasting Air Passenger Numbers for the Next Two Years Using Time Series Analysis with Python',
    description: 'Explore the project to click live preview.',
    imageUrl: `${python2}`,
    url: 'https://drive.google.com/file/d/1-Eg0pUJ0Hcx0LqOSqPWBcCRgiYEeYTOh/view?usp=sharing', // Replace with actual image URL
  },
];


