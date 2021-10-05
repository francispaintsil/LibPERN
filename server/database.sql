CREATE DATABASE Library;

CREATE TABLE books(
    book_id SERIAL PRIMARY KEY,
    isbn_no VARCHAR(35) UNIQUE NOT NULL,
    title VARCHAR(255),
    author VARCHAR(255),
    category VARCHAR(255),
    quantity INT,
    student_id_fkey INT REFERENCES student(student_id) ON DELETE RESTRICT;
);

CREATE TABLE student(
    student_id SERIAL PRIMARY KEY,
    school_id SERIAL UNIQUE NOT NULL,
    firstname VARCHAR(255),
    surname VARCHAR(255),
    gender VARCHAR(255),
    dob VARCHAR(200),
    addres VARCHAR(255),
    course VARCHAR(500),
    max_no_books INT,
    max_no_days INT,
    librarian_id_fkey REFERENCES librarian(librarian_id) ON DELETE RESTRICT;
);

--KEEPING THE RECORDS OF BOOKS BORROWED
CREATE TABLE book_records(
  book_record_id SERIAL PRIMARY KEY, 
  accession_no VARCHAR(35) UNIQUE NOT NULL,
  isbn_no_fkey VARCHAR(35) REFERENCES books(isbn_no),
  librarian_id_fkey INT REFERENCES librarian(librarian_id)
  );

--TRACKS BOOKS BORROWED FROM STUDENTS
CREATE TABLE book_issue(
  book_issue_id SERIAL PRIMARY KEY,
  student_id_fkey INT REFERENCES student(student_id),
  accession_no_fkey VARCHAR(35) REFERENCES book_records(accession_no),
  issue_date DATE NOT NULL,
  return_date DATE
  );

  CREATE TABLE ordered_books(
  ordered_books_id SERIAL PRIMARY KEY,
  book_id_fkey INT REFERENCES books(book_id),
  book_issue_id_fkey INT REFERENCES book_issue(book_issue_id)
  );


CREATE FUNCTION lib() returns text language sql as $$
  SELECT string_agg (substr('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*0123456789', ceil (random() * 62)::integer, 1), '')
  FROM generate_series(1, 20)
$$;
CREATE TABLE librarian (
  librarian_id SERIAL PRIMARY KEY,
  username VARCHAR(120),
  pasword  VARCHAR(120),
  library_key text unique not null default lib()
  admin_id_fkey INT REFERENCES superadmin(admin_id),
);
  INSERT INTO librarian DEFAULT VALUES;



CREATE TABLE superadmin(
  admin_id serial primary key,
  first_name VARCHAR(200),
  last_name VARCHAR(200),
  password VARCHAR(200)
  );

insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (1, 9843, 'Issy', 'Huws', 'Non-binary', '12/3/1937', '1 Westport Place', 'Health Care', 5, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (2, 5853, 'Trixie', 'Jozaitis', 'Polygender', '2/12/1898', '7 Redwing Lane', 'Capital Goods', 5, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (3, 2294, 'Joelynn', 'Lipprose', 'Non-binary', '9/22/1962', '39 Toban Junction', 'Finance', 9, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (4, 6760, 'Gerick', 'Drane', 'Female', '4/26/1950', '45907 Paget Street', 'Capital Goods', 7, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (5, 2374, 'Isacco', 'Heads', 'Male', '7/10/2019', '0796 Mariners Cove Park', 'Public Utilities', 3, 6);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (6, 6647, 'Lilian', 'Carnew', 'Genderfluid', '8/8/1952', '73340 Namekagon Crossing', 'Public Utilities', 10, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (7, 9205, 'Moishe', 'Ingleton', 'Bigender', '10/27/1926', '41348 Hazelcrest Avenue', 'Health Care', 4, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (8, 4031, 'Shurlocke', 'Hould', 'Bigender', '4/3/1948', '9 Prairieview Hill', 'Consumer Services', 1, 2);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (9, 8605, 'Quentin', 'Soares', 'Agender', '12/19/1935', '3370 Straubel Park', 'Consumer Durables', 8, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (10, 1440, 'Austine', 'Siemon', 'Bigender', '8/14/1917', '97853 Stephen Point', 'Health Care', 1, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (11, 1100, 'Barron', 'Petican', 'Genderqueer', '4/12/1908', '8630 Almo Point', 'Consumer Non-Durables', 2, 6);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (12, 6870, 'Nessy', 'Almond', 'Female', '7/10/1988', '3 Algoma Alley', 'Consumer Services', 2, 5);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (13, 4565, 'Britteny', 'Preator', 'Agender', '8/23/1997', '42 Golf Drive', 'Health Care', 9, 2);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (14, 5089, 'Gerrie', 'Somersett', 'Polygender', '6/22/1919', '7 Gale Parkway', 'n/a', 5, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (15, 1395, 'Cariotta', 'Renoden', 'Female', '9/15/1900', '29 Buell Junction', 'Transportation', 7, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (16, 8188, 'Rickie', 'Glassard', 'Bigender', '6/7/1947', '5280 Riverside Court', 'Energy', 4, 9);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (17, 3721, 'Charles', 'Flieger', 'Female', '7/4/1888', '58673 Rieder Center', 'n/a', 5, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (18, 3104, 'Esme', 'Robardey', 'Genderfluid', '10/12/1935', '2 Reinke Park', 'Health Care', 5, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (19, 5636, 'Ophelie', 'Emerine', 'Male', '7/26/1961', '3895 Tennessee Avenue', 'Energy', 1, 3);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (20, 9385, 'Raddy', 'Putten', 'Non-binary', '8/25/1931', '0 Ronald Regan Parkway', 'n/a', 3, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (21, 3403, 'Gallard', 'Glasscock', 'Polygender', '3/22/1946', '7747 Magdeline Drive', 'n/a', 6, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (22, 5219, 'Moore', 'Matschoss', 'Female', '8/24/1958', '37985 Homewood Plaza', 'Finance', 6, 2);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (23, 5217, 'Juan', 'Tomovic', 'Genderfluid', '8/30/1901', '78 Badeau Place', 'Energy', 6, 9);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (24, 8962, 'Gaultiero', 'Tyzack', 'Female', '8/5/1909', '15562 Dixon Center', 'n/a', 10, 3);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (25, 2049, 'Lulita', 'Brum', 'Polygender', '10/22/1963', '84 Green Street', 'Finance', 9, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (26, 3799, 'Keven', 'Fontaine', 'Genderqueer', '1/16/1929', '3043 Pawling Road', 'Public Utilities', 9, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (27, 3378, 'Ashbey', 'McGirr', 'Genderqueer', '10/18/1905', '9 Mallory Plaza', 'Finance', 6, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (28, 3421, 'Vin', 'McGall', 'Genderqueer', '9/17/1971', '36 Prairie Rose Crossing', 'Technology', 6, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (29, 3141, 'Antonetta', 'Overlow', 'Non-binary', '6/29/1972', '46 Forest Dale Court', 'Health Care', 6, 6);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (30, 1083, 'Marijo', 'Kendred', 'Male', '4/7/2012', '32 Manley Lane', 'Health Care', 10, 1);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (31, 4523, 'Ward', 'Washbrook', 'Male', '4/28/1960', '4616 Eagle Crest Way', 'n/a', 3, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (32, 5424, 'Ysabel', 'Servante', 'Genderqueer', '2/1/1899', '5865 Ramsey Alley', 'Consumer Services', 7, 5);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (33, 8926, 'Ceciley', 'Lantoph', 'Genderfluid', '7/17/1984', '27 Pepper Wood Point', 'Consumer Services', 9, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (34, 9009, 'Aline', 'Espine', 'Bigender', '5/9/1884', '14 Schiller Plaza', 'Energy', 1, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (35, 8108, 'Chad', 'Kretchmer', 'Bigender', '11/18/1952', '49 Tomscot Crossing', 'Energy', 8, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (36, 2837, 'Rinaldo', 'Haine', 'Male', '6/23/1976', '1035 Gerald Alley', 'n/a', 2, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (37, 4335, 'Jazmin', 'Caswall', 'Female', '5/26/1887', '0 Mitchell Junction', 'Capital Goods', 10, 9);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (38, 9287, 'Reginald', 'Parken', 'Male', '5/10/1987', '69331 Oneill Hill', 'Finance', 10, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (39, 4413, 'Claiborn', 'Mardling', 'Genderqueer', '9/11/1913', '78059 Cottonwood Point', 'n/a', 6, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (40, 1331, 'Zebulen', 'McUre', 'Non-binary', '1/17/1965', '30910 Lakewood Terrace', 'Finance', 4, 1);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (41, 8731, 'Danell', 'Jakovijevic', 'Genderqueer', '3/7/2021', '554 Northwestern Terrace', 'n/a', 9, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (42, 9097, 'Arv', 'Meineck', 'Polygender', '11/5/1978', '42983 Corscot Terrace', 'Health Care', 2, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (43, 2652, 'Cathe', 'Howgego', 'Polygender', '3/29/1939', '0 Grasskamp Junction', 'Consumer Services', 9, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (44, 9065, 'Ame', 'Riddall', 'Genderfluid', '2/1/1954', '679 Holy Cross Alley', 'Health Care', 5, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (45, 3872, 'Josephine', 'Donnelly', 'Non-binary', '3/28/1995', '245 Lighthouse Bay Pass', 'n/a', 8, 9);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (46, 1303, 'Lea', 'Laurenty', 'Male', '5/27/1882', '75362 Darwin Park', 'n/a', 9, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (47, 2129, 'Elysia', 'Stebbins', 'Polygender', '12/15/1984', '86031 Porter Center', 'Energy', 1, 2);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (48, 3343, 'Amaleta', 'Spaduzza', 'Polygender', '7/26/1951', '028 North Park', 'Consumer Services', 3, 9);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (49, 6938, 'Caitrin', 'Devine', 'Polygender', '8/26/1952', '0199 Southridge Pass', 'Health Care', 10, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (50, 5192, 'Gunner', 'Work', 'Genderqueer', '5/8/1907', '0301 Randy Alley', 'Technology', 8, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (51, 8096, 'Leda', 'Russe', 'Genderfluid', '12/25/1905', '64 Barby Hill', 'n/a', 8, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (52, 9346, 'Burt', 'Studdard', 'Female', '12/3/1911', '0 Maple Alley', 'Finance', 7, 1);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (53, 6667, 'Raimundo', 'Stearnes', 'Polygender', '10/11/1923', '8496 Nobel Street', 'n/a', 7, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (54, 2922, 'Jenda', 'Guyonneau', 'Genderfluid', '5/3/2021', '771 Heffernan Court', 'Finance', 6, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (55, 2446, 'Jasmin', 'Pott', 'Genderfluid', '4/16/2014', '8 Hoffman Circle', 'Health Care', 10, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (56, 8976, 'Deidre', 'Volet', 'Female', '9/18/1935', '206 Portage Park', 'Basic Industries', 6, 1);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (57, 3319, 'Selena', 'Harbard', 'Genderfluid', '9/20/1984', '2979 Rusk Circle', 'n/a', 2, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (58, 5290, 'Ashbey', 'Ayrs', 'Genderqueer', '2/1/1898', '93173 Fremont Street', 'Capital Goods', 1, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (59, 2238, 'Clotilda', 'Yong', 'Bigender', '3/3/1889', '2105 Charing Cross Street', 'Energy', 3, 5);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (60, 8193, 'Tana', 'Bramwell', 'Female', '11/24/1988', '52780 Oak Valley Junction', 'Health Care', 8, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (61, 1160, 'Cody', 'Bernolet', 'Genderfluid', '9/21/1923', '86 Evergreen Court', 'Basic Industries', 5, 3);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (62, 8936, 'Rosemaria', 'Reiglar', 'Genderfluid', '11/18/1969', '5872 David Place', 'Basic Industries', 3, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (63, 5997, 'Fiorenze', 'McDonnell', 'Genderqueer', '10/23/2012', '45614 Cambridge Junction', 'Health Care', 9, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (64, 2204, 'Moshe', 'Baszkiewicz', 'Agender', '2/12/2017', '65337 Northland Junction', 'Technology', 8, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (65, 3077, 'Caresa', 'Mulbery', 'Male', '4/22/1928', '870 Marcy Junction', 'Technology', 3, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (66, 5406, 'Barret', 'Vitte', 'Agender', '9/21/1955', '2707 Welch Park', 'n/a', 3, 6);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (67, 5996, 'Rik', 'Gurnett', 'Female', '2/22/1892', '3 Mosinee Crossing', 'Public Utilities', 7, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (68, 8865, 'Tonia', 'Snedden', 'Polygender', '4/17/1889', '2464 Becker Plaza', 'Consumer Services', 9, 5);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (69, 5844, 'Margarete', 'Tremmel', 'Bigender', '4/12/1979', '519 Vernon Way', 'Technology', 4, 1);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (70, 3652, 'Flynn', 'Klemencic', 'Genderfluid', '3/8/1953', '310 Charing Cross Plaza', 'Consumer Services', 6, 6);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (71, 5555, 'Rafaela', 'Wroath', 'Genderfluid', '9/2/1885', '3 Summer Ridge Crossing', 'Finance', 7, 9);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (72, 5306, 'Ben', 'Westover', 'Polygender', '5/16/1993', '09 Stang Center', 'Finance', 3, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (73, 6444, 'Zarla', 'McArdell', 'Bigender', '9/9/1979', '2951 Havey Terrace', 'Technology', 7, 9);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (74, 2950, 'Ofella', 'Symmons', 'Polygender', '8/26/1884', '4351 Carpenter Street', 'Finance', 1, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (75, 1615, 'Alberta', 'Bullough', 'Bigender', '5/11/1933', '4 Lukken Alley', 'Consumer Services', 6, 2);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (76, 2263, 'Shayne', 'Phelipeaux', 'Polygender', '9/3/1970', '5112 Little Fleur Alley', 'Health Care', 9, 2);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (77, 1161, 'Jacki', 'Verny', 'Genderfluid', '9/10/1972', '5 Mendota Court', 'Capital Goods', 2, 9);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (78, 7268, 'Wynnie', 'Eagling', 'Polygender', '7/18/1984', '10730 Drewry Pass', 'Consumer Services', 1, 1);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (79, 6981, 'Gladys', 'De Dei', 'Genderqueer', '9/26/1980', '681 Elka Crossing', 'Technology', 4, 10);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (80, 6454, 'Bord', 'Castard', 'Non-binary', '8/25/1901', '98095 Shoshone Hill', 'Health Care', 4, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (81, 4566, 'Monica', 'Kimbley', 'Genderqueer', '8/29/1963', '43387 Rockefeller Crossing', 'Consumer Services', 6, 1);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (82, 8699, 'Malinda', 'Stroud', 'Genderqueer', '7/26/1963', '79 Ridge Oak Circle', 'Miscellaneous', 4, 6);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (83, 8219, 'Horatio', 'Trippitt', 'Non-binary', '5/31/1971', '3 Northland Circle', 'n/a', 6, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (84, 6386, 'Andree', 'Wilkison', 'Female', '10/31/1973', '7191 Stephen Drive', 'Energy', 10, 9);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (85, 2349, 'Carilyn', 'Geldard', 'Non-binary', '1/4/1919', '2028 Miller Trail', 'n/a', 6, 4);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (86, 1193, 'Leeland', 'Van Dijk', 'Male', '2/11/1996', '4191 Talmadge Plaza', 'Health Care', 9, 3);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (87, 7373, 'Gabriel', 'Sedgman', 'Female', '2/15/1946', '9925 Randy Plaza', 'n/a', 10, 9);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (88, 6523, 'Jami', 'Crock', 'Polygender', '12/25/1903', '93522 Goodland Trail', 'Capital Goods', 8, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (89, 8800, 'Yul', 'Inger', 'Non-binary', '11/5/1973', '710 Mcbride Hill', 'Finance', 4, 1);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (90, 6991, 'Marthe', 'Erni', 'Genderqueer', '4/25/1940', '898 Swallow Point', 'Miscellaneous', 9, 3);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (91, 9059, 'Bealle', 'Budd', 'Genderqueer', '5/3/2012', '6920 Monterey Road', 'Consumer Services', 4, 6);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (92, 3750, 'Layla', 'Devitt', 'Genderfluid', '4/28/1999', '69949 Buhler Hill', 'Consumer Services', 5, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (93, 7386, 'Fidel', 'Dahlbom', 'Bigender', '11/14/1954', '3286 Paget Trail', 'n/a', 5, 5);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (94, 2968, 'Chiquia', 'Wordsworth', 'Genderqueer', '2/12/1897', '283 Commercial Junction', 'n/a', 1, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (95, 9604, 'Granny', 'Amies', 'Genderfluid', '12/9/2000', '029 Mcguire Plaza', 'Public Utilities', 2, 8);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (96, 1454, 'Steven', 'Peterkin', 'Genderqueer', '8/12/1997', '66 Vidon Center', 'Basic Industries', 4, 3);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (97, 3129, 'Lia', 'Northeast', 'Agender', '6/30/1960', '10 Tony Plaza', 'n/a', 8, 7);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (98, 6330, 'Eadie', 'Trahar', 'Non-binary', '12/13/1898', '8 Sloan Lane', 'Basic Industries', 7, 5);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (99, 9355, 'Noami', 'Jaine', 'Agender', '9/27/1960', '38 Farmco Street', 'Consumer Services', 7, 2);
insert into student (student_id, school_id, firstname, surname, gender, dob, addres, course, max_no_books, max_no_days) values (100, 2370, 'Pryce', 'Haacker', 'Bigender', '8/26/1882', '827 Sugar Street', 'n/a', 4, 9);



--DISPLAY THE TITLE FROM THE BOOKS TABLE AND 
--THE INNERJOIN OF STUDENT_ID_FKEY IN BOOKS TABLE
-- WITH STUDENT_ID PRIMARY KEY IN STUDENT TABLE
SELECT books.title, student.school_id
FROM books
INNER JOIN student
ON books.student_id_fkey = student.student_id;

--Added three columns to superadmin table
ALTER TABLE superadmin 
ADD COLUMN first_name VARCHAR(200);
ALTER TABLE superadmin 
ADD COLUMN last_name VARCHAR(200);
ALTER TABLE superadmin 
ADD COLUMN password VARCHAR(200);

--Changed Columns and constraint on Librarian table
 CREATE FUNCTION lib() returns text language sql as $$
  SELECT string_agg (substr('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*0123456789', ceil (random() * 62)::integer, 1), '')
  FROM generate_series(1, 20)
$$;
 ALTER TABLE librarian
 ADD COLUMN library_key text unique not null default lib();
  INSERT INTO librarian DEFAULT VALUES;