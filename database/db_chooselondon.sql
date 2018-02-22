-- MySQL dump 10.16  Distrib 10.2.12-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: db_chooselondon
-- ------------------------------------------------------
-- Server version	10.2.12-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `short_desc` varchar(255) DEFAULT NULL,
  `banner_photo` varchar(200) DEFAULT NULL,
  `header_photo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'parks','Parks','Commonly known as \"The Forest City,\" London values its natural heritage and environment. Our parks and natural areas are essential to ecological survival and contribute to the overall quality of life in London. Recreation and leisure are also opportunities for belonging in our community by supporting strong families bonds and building strong neighbourhoods.','Find out the best <br>Parks in London','banner_parks','header_parks'),(2,'safety','Safety','The city of London believes in promoting the development of strong neighbourhoods, healthy lifestyles, and sustainable environments. Neighbourhoods are about people and places and how they work in partnership to make great places to live, work and play. An ideal environment contributes for increasing personal health, developing stronger social skills and reducing stress.','Check out what <br>makes London Safe','banner_safety','header_safety'),(3,'health','Health','London is known as a hub of health services and community support, serving patients from Middlesex and other Southern Ontario areas. Citizens and residents may apply to have free access to health-care services by Medicare system, allowing them to make appointments, treatments and receive family doctor visits. Urgent and life-threatening emergency care is guaranteed for anyone, regardless their immigration status.\r\nLondon counts with world renowned research institutes as well as two regional teaching institutes. London Health Science Centre, a hospital network that operates University Hospital and Victoria Hospital, is Ontario\'s largest employer and trains more than 1,800 medical and care professionals annually, being reference in research and health service. A city with an entrepreneurship culture, when combined with unique health care solutions, offers an environment where medical innovation can succeed.','Discover more about the <br>health system in London','banner_health','header_health'),(4,'post_secondary_education','Post-Secondary Education','The post secondary institutions in London are constantly upgrading their technology and curriculum to ensure students get the skills and experience that employers are looking for. Our students strike a balance between high academic achievement and athletic/social engagement that together fosters a life-long sense of pride and belonging to the community - London provides everything students need to have the best time with some of the best friends - people who share your passions and dreams.','Discover the best Post-Secondary <br>Education Institutions','banner_post_secondary','header__post_secondary'),(5,'secondary_education','Secondary Education','London has two public school boards, one secular and one Catholic, as well as several private elementary schools. Public schools are funded through tax dollars and are free to attend. Public schools in Ontario have high graduation rates in a wide range of programs. They are inclusive environments to maximize learning for all students. See below a list of the best rated secondary education institutions in London:','Find top of the line <br>Education in London','banner_secondary','header_secondary'),(6,'english_studies','English Studies','London is a friendly city for people all over the world. We offer support for immigrants, starting with top of the line English as Second Language Institutions, where we allow everyone to feel at home here, no matter their culture or mother language.','Feel at home <br>in London','banner_english_studies','header_english_studies'),(7,'sports','Sports',NULL,'Check out the best sports <br>scene London has to offer','banner_sports','header_sports'),(8,'arts_culture','Arts & Culture',NULL,'Discover London\'s Art <br>and Culture Scene','banner_arts_culture','header_arts_culture'),(9,'food_restaurants','Food & Restaurants','Enjoy the many diverse cuisines London has to offer in its thriving food culture. The downtown core has anything you need to satisfy your taste buds and more! With a wide variety of pubs, clubs and restaurants, there is always somewhere to go tonight in London.','Enjoy the best food <br>London has to offer','banner_food_restaurants','header_food_restaurants'),(10,'social_life','Social Life',NULL,'Don\'t miss out on <br>London\'s exciting social life','banner_social_life','header_social_life'),(11,'starting','Getting Started','Recently graduated looking for an opportunity in London?','Entry level jobs',NULL,'header_starting'),(12,'positions','Open positions','Are you a professional looking for placement?','Looking for jobs',NULL,'header_positions'),(13,'resources','Resources','Trying to find your dream job in London?','Find your dream job',NULL,'header_resources'),(14,'cost_life','Cost of life',NULL,'Check out the cost of life difference between London and other cities around the country',NULL,'header_cost_life'),(15,'main_companies','Main Companies',NULL,'Discover here the top hiring companies em London',NULL,'header_main_companies'),(16,'entrepreneurship','Entrepreneurship',NULL,'London is a growing center for new business, attracting investors from all over the world',NULL,'header_entrepreneurship');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_item`
--

DROP TABLE IF EXISTS `category_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_item` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` smallint(6) NOT NULL,
  `item_id` mediumint(9) NOT NULL,
  `position` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_item`
--

LOCK TABLES `category_item` WRITE;
/*!40000 ALTER TABLE `category_item` DISABLE KEYS */;
INSERT INTO `category_item` VALUES (1,1,1,1),(2,1,2,2),(3,1,3,3),(4,1,4,4),(5,1,5,5),(6,1,6,6),(7,3,7,1),(8,3,8,2),(9,3,9,3),(10,4,10,1),(11,4,11,2),(12,5,12,1),(13,5,13,2),(14,5,14,3),(15,6,15,1),(16,6,16,2),(17,6,17,3),(18,7,18,1),(19,7,19,2),(20,7,20,3),(21,7,21,4),(22,7,22,5),(23,8,23,1),(24,8,24,2),(25,8,25,3),(26,8,26,4),(27,9,27,1),(28,9,28,2),(29,9,29,3),(30,10,30,1),(31,10,31,2),(32,10,32,3),(33,10,33,4),(34,11,34,1),(35,11,35,2),(36,11,36,3),(37,12,37,1),(38,12,38,2),(39,13,39,1),(40,13,40,2),(41,13,41,3);
/*!40000 ALTER TABLE `category_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `hours` varchar(200) DEFAULT NULL,
  `website` varchar(200) DEFAULT NULL,
  `photo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'springbank_park','Springbank Park','Springbank Park is a 140-hectare park located along a stretch of the Thames River in London, Ontario. As the largest park in London, it contains 30 km of trails and is home to Storybook Gardens, a family attraction open year-round. The Springbank Park is the largest park in London, with trails accommodating biking or walking.','1085 Commissioners Rd W, London, ON N6K 4Y6','(519) 661-5575','6AM-10PM',NULL,'springbank_park'),(2,'victoria_park','Victoria Park','Victoria Park is a park located in downtown London, Ontario. It is one of the major centres of community events in London, including the Sunfest, the Home County Folk Festival, The London Rib-Fest and The International Food Festival. It also has an ice skating rink in the winter, built every winter since 1913. The area in front of the bandshell now serves as a free, public skatepark, consisting of many metal benches and a stage drop.','509 Clarence St, London, ON N6A 3N1','(519) 661-4529','24h',NULL,'victoria_park'),(3,'fanshawe_conservation','Fanshawe Conservation Area','Fanshawe Conservation Area is a 3,000 acre conservation area created to protect the City of London from flooding. It\'s considered an outdoor playground on the edge of London, being one of three large, multi-use conservation areas in the Upper Thames River watershed. The area offers camping (both seasonal and overnight), boating, canoe and kayak rentals, hiking, picnicking, mountain biking, bird watching, fishing, special events and much more!','1424 Clarke Rd, London, ON N5V 5B9','(519) 951-6181','24h',NULL,'fanshawe_conservation'),(4,'harris_park','Harris Park','','','','',NULL,'harris_park'),(5,'ivey_park','Ivey Park','','','','',NULL,'ivey_park'),(6,'gibbons_park','Gibbons Park','','','','',NULL,'gibbons_park'),(7,'victoria_hospital','Victoria Hospital','Victoria Hospital offers active treatment, acute care, research and teaching hospital, as well as adult and children\'s emergency departments and outpatient services. The hospital also offers mental health services for adults with a serious mental illness, critical care trauma centre, maternal newborn care and Women\'s ambulatory care.','800 Commissioners Rd E, London, ON, N6A 5W9','(519) 685-8500','24h','http://www.lhsc.on.ca/About_Us/LHSC/Maps_Directions/VH/index.htm','victoria_hospital'),(8,'university_hospital','University Hospital','The University Hospital of London offers active treatment, acute care, research and teaching hospital, and also has an emergency department and outpatient services. It also offers specific services, such as Cardiac Care Services, Clinical Neurological Sciences, Intensive Care Unit (ICU), Multi-Organ Transplant Program and Renal Care Program.','339 Windermere Rd, London, ON, N6A 5A5','(519) 663-3197','24h','http://www.lhsc.on.ca/About_Us/LHSC/Maps_Directions/UH/index.htm','university_hospital'),(9,'st_josephs_health','St. Joseph\'s Health Care','St. Joseph\'s Health Care in London, Ontario, offers doctors and nurses assess and treat non-threatening injuries or illnesses that cannot wait for a family doctor. It has on-site diagnostics include x-rays, ultrasounds and laboratory tests.','268 Grosvenor St, London, ON N6A 4V2','(519) 646-6100','9AM-6PM','https://www.sjhc.london.on.ca','st_joseph_health'),(10,'western_university','Western University','Western University is proud to deliver \"The Western Experience\", an exemplary learning experience that engages the best and brightest people challenging them to meet ever-higher standards in the classroom and beyond. Western prepares future leaders to succeed, forming every dimensions of students - intellectual, social, cultural as well as physical. Considered Canada\'s most beautiful university, Western\'s main campus spans 400 acres of Gothic-style buildings mixed with modern, providing a great environment for our community of scholars.','1151 Richmond St, London, ON N6A 3K7','(519) 661-2111',NULL,'http://www.uwo.ca','western_university'),(11,'fanshawe_college','Fanshawe College','Fanshawe is one of Ontario\'s largest colleges &#8212; with four campuses in London, Simcoe, St. Thomas and Woodstock - Fanshawe serves close to half a million people with a promise to educate, engage, empower and excite. The college is proud to provide flexible learning arrangements and experiential education opportunities developed in response to labour market needs.  They offer offer more than 200 degree, diploma, certificate and apprenticeship programs to students each year, helping people unlock their potential and achieve success in a variety of disciplines including applied arts, business, health care, human services, hospitality and technology.','1001 Fanshawe College Boulevard London, ON N5Y 5R6','(519) 452-4277',NULL,'https://www.fanshawec.ca','fanshawe_college'),(12,'jack_chambers_school','Jack Chambers Public School','','1650 Hastings Dr  London, ON N5X3E3','(519)452-8240',NULL,'http://sites.tvdsb.ca/JackChambers.cfm','jack_chambers_school'),(13,'masonville_school','Masonville Public School','','25 Hillview Boulevard London N6G 3A7','(519) 452-8390',NULL,'http://sites.tvdsb.ca/Masonville.cfm','masonville_school'),(14,'london_central_school','London Central Secondary School','','509 Waterloo St London, ON N6B2P8','(519) 433-3388',NULL,'http://sites.tvdsb.ca/Central.cfm','london_central_school'),(15,'london_language_institute','London Language Institute','LLI is a leader in ESL and academic preparation, with more than 18 years experience working with students from all over the world. LLI offers English courses, pathway programming, accredited TESL programs, business courses, CAEL, TOEFL and IELTS Preparation courses, High school and study / vacation programs.','183 Central Ave, Suite 101, London, ON N6A 1M6','(519) 439-3350','8AM-4PM','https://llinstitute.com','london_language_institute'),(16,'wheable_adult_centre','Wheable Adult Education Centre','The school offers the gateway to Learning to upgrade the students\' literacy and numeracy skills, English as a Second Language, high school day and Self Study credit courses, Hairstyling Pre-Apprenticeship Program and Personal Support Worker Program.','70 Jacqueline St, London, ON N5Z 3P7','(519) 452-2660',NULL,'https://www.tvdsb.ca/en/index.aspx','wheable_adult_centre'),(17,'london_international_academy','London International Academy','London International Academy is a Canadian Private Co-ed Secondary Boarding school. It offers academic courses from Grades 9 - 12 and is authorized to grant the Ontario Secondary School Diploma (OSSD). With a strong track record of placing students in Canada\'s top universities, LIA is focused to meet the needs of international ESL students. LIA offers year-round semesters, seasonal camp programs and a variety of extra-curricular activities to ensure a full student life.','361-365 Richmond St, London, ON N6A 3C2','(519) 433-3388',NULL,'http://immigration.london.ca/Learning/Pages/international-academy.aspx','london_international_academy'),(18,'london_knights','The London Knights','Are you a fan of hockey? Support your local team! The London Knights Hockey Club is owned and operated by former \"NHLers\" Mark and Dale Hunter and Basil McRae. The team plays and operates out of Budweiser Gardens in London, Ontario and plays in the Midwest Division of the Western Conference in the Ontario Hockey League. Notable London Knights alumni include: Darryl Sittler, Dino Ciccarelli, Brendan Shannahan, Brad Marsh, Rick Nash and Corey Perry.',NULL,NULL,NULL,'http://londonknights.com','london_knights'),(19,'budweiser_gardens','Budweiser Gardens','Budweiser Gardens opened in 2002 and is a two-time recipient of Major Facility of the Year (awarded at the Canadian Broadcast Industry Awards) in 2010 and 2012. They are experts in hosting and entertainment, partnering with over 300 clients at 400 global properties to create memorable experiences for millions of visitors every year. For sporting events and more, Budweiser gardens is the place to go!','99 Dundas St, London, ON N6A 6K1','(519) 667-5700',NULL,'https://www.budweisergardens.com','budweiser_gardens'),(20,'london_lightning','The London Lightning','Three time National Basketball League of Canada champion (2012, 2013 and 2017), London Lightning has a short yet brilliant history. Founded in 2011, the team is owned by Vito Frijia, current President of the NBL of Canada, and had former NBA all-star player Micheal Ray Richardson as first head coach. Playing its home games at the Budweiser Gardens, the yellow, black and white team promptly has become a proud and victorious symbol of the city.','','',NULL,'http://www.lightningbasketball.ca','london_lightning'),(21,'raceway','The Raceway at the Western Fair District','Since 1961, the Western Fair District has been South Western Ontario\'s place to play! Featuring harness racing at its best &#8212; live on our half-mile track, October through May. Simulcast racing is also available all year round, broadcasting races from all over North America!','','(519) 438-7203',NULL,'https://www.westernfairdistrict.com/raceway','raceway'),(22,'aquatic_centre','Canada Games Aquatic Centre','The Canada Games Aquatic Centre offers recreational and fitness programming all year round. A modern, clean, well-cared for facility, it offers extensive opportunity for aquatic lessons and recreational activities. Close to the skate park, splash pad, arena, restaurants, shopping and both elementary and high schools, it is well utilized by the community.','1045 Wonderland Rd N, London, ON N6G 2Y9','(519) 661-4455','6AM-10PM',NULL,'aquatic_centre'),(23,'museum_london','Museum London','Museum London is Southwestern Ontario\'s leading establishment for the collection and presentation of visual art and material culture. Through public and educational programming, special events and exhibitions, Museum London strives to promote the knowledge and enjoyment of regional art, culture and history.','421 Ridout St N, London, Ontario N6A 5H4','(519) 661-0333','12PM-5PM','http://museumlondon.ca','museum_london'),(24,'royal_regiment_museum','The Royal Canadian Regiment Museum','The Royal Canadian Regiment Museum tells the story of the first infantry regiment established in Canada within the permanent force. The regimental history can be traced back to the War of 1812 and it overlaps with some of the most significant episodes of post-confederation Canadian history.','701 Oxford St E, London, Ontario N5Y 4T7','(519) 660-5275','10AM-4PM','http://www.thercrmuseum.ca','royal_regiment_museum'),(25,'archaeology_museum','Museum of Ontario Archaeology','The Museum of Ontario Archaeology is a unique Canadian museum devoted to the study, display, and interpretation of the human occupation of Southwestern Ontario over the past 13,000 years.','1600 Attawandaron Rd, London, Ontario N6G 3M6','(519) 473-1360','10AM-4:30PM','http://archaeologymuseum.ca','archaeology_museum'),(26,'childrens_museum','London Children\'s Museum','The London Children\'s Museum provides children and their grown-ups with extraordinary hands-on learning experiences in a distinctly child-centred environment. Part of the London community for 40 years, the Children\'s Museum is where more than 80,000 children and their families visit each year to dream and play, and gather to learn and grow.','21 Wharncliffe Rd S, London, Ontario N6J 4G5','(519) 434-5726','10AM-5PM','https://www.londonchildrensmuseum.ca','childrens_museum'),(27,'food_festival','London International Food Festival','London International Food Festival is the host to an array of savoury dishes from around the globe. Partake in games, food and fun in this annual London, Ontario event. As well as offering Hard Root Beer, we are proud to offer our own brand of non-alcohol Festival Root Beer on tap! Presenting Virgin House Music & rocking house music with FM96.',NULL,NULL,NULL,'http://canadasbiggestparty.com/london-international-food-festival','food_festival'),(28,'covent_garden_market','Covent Garden Market','The Covent Garden Markets fresh produce, gourmet foods, unique gifts, Public Square, seasonal outdoor farmers\' Market, ice rink and regular family programming, it continues to build on its long and rich traditions as one of London\'s center of commerce and community.','130 King St, London, ON N6A 1C5','(519) 439-3921','8AM-7PM','http://www.coventmarket.com','covent_garden_market'),(29,'western_fair_market','Western Fair Farmers and Artisan Market','It is known for its Saturday Farmers\' Market. The Market is a popular destination for chefs, cooks and local gastronomes in search of a wide variety of artisanal products and seasonal ingredients. Market-goers love the Market because they can buy high-quality; farm-fresh goods directly from the person who produced them and can find unique products they won\'t discover anywhere else in the city.','900 King St, London, ON N5Y 5P8','(519) 438-5942','SAT: 8AM-3PM','https://www.westernfairdistrict.com/market','western_fair_market'),(30,'ceeps','The Ceeps','This enduring, informal tavern offers typical pub grub, a full bar, DJs & an outdoor patio. In business for 125 years, the ceeps has always been the hot destination for people\'s nights.','671 Richmond St, London, ON N6A 5M8','(519) 432-1425','11AM-2AM','http://www.ceeps.com','ceeps'),(31,'labatt','Labatt Brewery','Take the Labatt Brewery Tour and learn how a great Canadian beer is made. The tour takes about 2 hours and includes a full guided tour of the brewery and sampling. Tours run all year round and must be pre-booked by email or by phone.','150 Simcoe St, London, ON N6A 4M3','(519) 850-8687','10AM-5PM','http://www.labatt.com','labatt'),(32,'music_hall','London Music Hall','London Music Hall is a premier stop for many artists as they tour through Southern Ontario. Acts such as The Arkells, The Trews, Killswitch Engage, Lee Brice, Skrillex, August Burns Red, Calvin Harris, Snoop Dogg & many more have played our venue. Apart from being a venue, London Music Hall also delivers state of the art production.','185 Queens Ave, London, ON N6A 1G7','(519) 432-1107','','https://londonmusichall.com','music_hall'),(33,'toboggan','Toboggan Brewing','In the heart of Downtown, Toboggan mixes perfectly good drink and food with a casual and cozy environment. The Brewery produces ten different types of premium beer, besides its seasonal cider and cocktails. Certainly, it\'s a must go in London!','585 Richmond St, London, ON N6A 3G2','(519) 433-233','SUN-THU: 12PM-11PM, FRI-SAT: 12PM-2AM','http://www.tobogganbrewing.com','toboggan'),(34,'do_research','Do your research','Talk to people in the industry to learn more about what the job is like. You may have an idea of what you want to do, but once you see the work environment you may not find that it\'s the right fit.',NULL,NULL,NULL,NULL,NULL),(35,'get_involved','Get involved','Join a team or volunteer organization. You never know who you might meet that will open the door to your next opportunity. Volunteering is the best way to get to know people and open possibilities for an actual position. It also gives you great experience to add to your resume.',NULL,NULL,NULL,NULL,NULL),(36,'expand_network','Expand your network','If you\'re looking for a new job, tell everyone you know. Attend events, connect with people, engage in the community and spread the word. Most employers hire by word of mouth, so make sure people you talk to know you\'re looking for a new opportunity. There are many local networking groups out there, just take a look.',NULL,NULL,NULL,NULL,NULL),(37,'employment_rates','Employment rates','The number of Internet job postings in London continues to increase: about 16% relative to the same period of 2016. London has 7400 job postings currently, and this data comes also with an overall increasing trend in employment, being full-time employment responsible for 77% of total employment.',NULL,NULL,NULL,NULL,NULL),(38,'hot_positions','Hot positions in town','London\'s digital creative sector is booming, and has approximately 500 open job positions. London Tech Jobs gives access to companies and their job postings, as well as community resources within London\'s growing digital creative sector.',NULL,NULL,NULL,NULL,NULL),(39,'looking_job','Looking for a job','There are many positions available in London and, after networking, researching online is the best way to find the right fit for you.<br>Many websites may help you in this task, here\'s a list with the biggest job posting sources:',NULL,NULL,NULL,NULL,NULL),(40,'extra_help','Getting extra help','Sometimes handling your resume is not enough for getting a job. Creating a clear and reader focused cover letter as well as being prepared for the interview is crucial to be selected among other applicants. Here\'s a list of employment agencies and companies that would help you write your resume, as well as the cover letter and get you prepared for your next step in your career.',NULL,NULL,NULL,NULL,NULL),(41,'job_fair','London and Area Works Job Fair','The London and Area Works Job Fair happens twice a year and  as per the last edition, it attracted more than 50 employers, offering a total of 2,300 jobs, along with a number of employment and training agencies.<br>Rob Collins, from LEDC (London Economic Development Corp.), said that the personal contact made possible through job fairs is still the most popular hiring method for employers. Remember to print your resume and go with your enthusiasm to meet your future employer.',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `section`
--

DROP TABLE IF EXISTS `section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `section` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(200) NOT NULL,
  `icon` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section`
--

LOCK TABLES `section` WRITE;
/*!40000 ALTER TABLE `section` DISABLE KEYS */;
INSERT INTO `section` VALUES (1,'life','Life in London','Creative cities enhance quality of life and London definitely counts with an energetic and engaged community. Our neighborhoods have extraordinary attractions, amenities, heritage, and social opportunities. The inclusive community allows all residents to have a role in helping shaping its future.','banner_life','icon_life'),(2,'education','Education in London','London is a city proud to be a place where people meet and futures are made. Students are encouraged to engage and be hands-on with what they love - creating something, solving problems, helping others - and building a foundation for a lifetime of happiness and success. Students from more than 100 countries share in classroom experiences that broaden personal perspectives and understanding here in London. The city\'s education institutions prides themselves on challenging the best and brightest faculty, staff and students to commit to the highest global standards.','banner_education','icon_education'),(3,'work','Work in London','London has been built on innovative local start-up ventures finding a niche market and growing into successful Canadian and global players. The city has a solid reputation for specialized, well-educated and experienced professionals, what provides affordability, safety and a good work/life balance.','banner_work','icon_work'),(4,'economics','London Economics','Historically, London and Southwestern\'s economy has been an engine of economic growth in Ontario, powered mainly by manufacturing and food-processing industries. More recently, medical research, insurance and information technology have become important fields of London\'s economy, representing significative numbers on employment and market. The city has transitioned to evolve into a technology hub with a focus on the Digital Creative sector.','banner_economics','icon_economics'),(5,'social','Social in London','With a small-town personality and big-city structure, London offers a great lifestyle for young professionals and families. No matter what may be your interests, from music, food or outdoor activities, you\'ll be sure to discover many attractions in this vibrant city.','banner_social','icon_social');
/*!40000 ALTER TABLE `section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `section_category`
--

DROP TABLE IF EXISTS `section_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `section_category` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `section_id` tinyint(4) NOT NULL,
  `category_id` smallint(6) NOT NULL,
  `position` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section_category`
--

LOCK TABLES `section_category` WRITE;
/*!40000 ALTER TABLE `section_category` DISABLE KEYS */;
INSERT INTO `section_category` VALUES (1,1,1,1),(2,1,2,2),(3,1,3,3),(4,2,4,1),(5,2,5,2),(6,2,6,3),(7,5,7,1),(8,5,8,2),(9,5,9,3),(10,5,10,4),(11,3,11,1),(12,3,12,2),(13,3,13,3),(14,4,14,1),(15,4,15,2),(16,4,16,3);
/*!40000 ALTER TABLE `section_category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-21 21:27:46
