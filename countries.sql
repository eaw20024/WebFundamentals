-- MySQL Countries --
-- What query would you run to get all the countries that speak Slovene. Your query should return the name of the
-- country, language and language percentage. You query should arrange the result by language percentage in
-- descending order (EASY).

-- SELECT countries.name AS name, languages.language, languages.percentage 
-- FROM languages
-- LEFT JOIN countries ON countries.code = languages.country_code
-- WHERE language = 'Slovene'
-- ORDER BY percentage DESC;

-- What query would you run to display the total number of cities for each country. Your query should return the
-- name of the country and the total number of cities. You query should arrange the result by number of cities in
-- descending order (HARD).

-- SELECT countries.name, COUNT(*) AS cities
-- FROM countries
-- JOIN cities ON countries.id = cities.country_id
-- GROUP BY countries.id
-- ORDER BY num_cities DESC;

-- What query would you run to get all the cities in Mexico with a population of greater than 500,000? 
-- Your query should arrange the result by population in descending order (EASY).

-- SELECT cities.name, cities.population
-- FROM cities
-- LEFT JOIN countries ON cities.country_code = countries.code
-- WHERE country_code = 'MEX' AND cities.population >= 500000
-- ORDER BY cities.population DESC;

-- What query would you run to get all languages in each country with a percentage greater than 89%? 
-- Your query should arrange the result by percentage in descending order (EASY).

-- SELECT countries.name, languages.language, languages.percentage
-- FROM languages
-- LEFT JOIN countries ON countries.code = languages.country_code
-- WHERE percentage >= 89.0
-- ORDER BY percentage DESC;

-- What query would you run to get all the countries with Surface Area below 501 and Population greater than 100,000? (MEDIUM)

-- SELECT name, surface_area, population 
-- FROM countries
-- WHERE surface_area < 501
-- AND population >= 100000;

-- What query would you run to get countries with only Constitutional Monarchy with a capital greater than 200 
-- and a life expectancy greater than 75 years? (EASY)

-- SELECT name, government_form, capital, life_expectancy
-- FROM countries
-- WHERE government_form = 'Constitutional Monarchy'
-- AND capital >= 200
-- AND life_expectancy >= 75.0
-- ORDER BY life_expectancy DESC;

-- What query would you run to get all the cities of Argentina inside the Buenos Aires district and 
-- have the population greater than 500,000? The query should return the Country Name, City Name, District and Population. (MEDIUM)

-- SELECT countries.name, cities.name, cities.district, cities.population
-- FROM cities
-- LEFT JOIN countries ON countries.code = cities.country_code
-- WHERE cities.district = 'Buenos Aires'
-- AND cities.population >= 500000;

-- What query would you run to summarize the number of countries in each region. The query should display the
-- name of the region and the number of countries. Also, the query should arrange the result by number of
-- countries in descending order.

-- SELECT region, count(*) AS countries
-- FROM countries
-- GROUP BY region 
-- ORDER BY countries DESC;



























