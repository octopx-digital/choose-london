-- MySQL dump 10.16  Distrib 10.2.14-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: db_chooselondon
-- ------------------------------------------------------
-- Server version	10.2.14-MariaDB

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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'parks','Parks','Commonly known as \"The Forest City,\" London values its natural heritage and environment. Our parks and natural areas are essential to ecological survival and contribute to the overall quality of life in London. Recreation and leisure are also opportunities for belonging in our community by supporting strong families bonds and building strong neighbourhoods.','Find out the best <br>Parks in London','banner_parks','header_parks'),(2,'safety','Safety','The city of London believes in promoting the development of strong neighbourhoods, healthy lifestyles, and sustainable environments. Neighbourhoods are about people and places and how they work in partnership to make great places to live, work and play. An ideal environment contributes for increasing personal health, developing stronger social skills and reducing stress.','Check out what <br>makes London Safe','banner_safety','header_safety'),(3,'health','Health','London is known as a hub of health services and community support, serving patients from Middlesex and other Southern Ontario areas. Citizens and residents may apply to have free access to health-care services by Medicare system, allowing them to make appointments, treatments and receive family doctor visits. Urgent and life-threatening emergency care is guaranteed for anyone, regardless their immigration status. <br>London counts with world renowned research institutes as well as two regional teaching institutes. London Health Science Centre, a hospital network that operates University Hospital and Victoria Hospital, is Ontario\'s largest employer and trains more than 1,800 medical and care professionals annually, being reference in research and health service. A city with an entrepreneurship culture, when combined with unique health care solutions, offers an environment where medical innovation can succeed.','Discover more about the <br>health system in London','banner_health','header_health'),(4,'post_secondary_education','Post-Secondary Education','The post secondary institutions in London are constantly upgrading their technology and curriculum to ensure students get the skills and experience that employers are looking for. Our students strike a balance between high academic achievement and athletic/social engagement that together fosters a life-long sense of pride and belonging to the community - London provides everything students need to have the best time with some of the best friends - people who share your passions and dreams.','Discover the best Post-Secondary <br>Education Institutions','banner_post_secondary','header_post_secondary'),(5,'secondary_education','Secondary Education','London has two public school boards, one secular and one Catholic, as well as several private elementary schools. Public schools are funded through tax dollars and are free to attend. Public schools in Ontario have high graduation rates in a wide range of programs. They are inclusive environments to maximize learning for all students. See below a list of the best rated secondary education institutions in London:','Find top of the line <br>Education in London','banner_secondary','header_secondary'),(6,'english_studies','English Studies','London is a friendly city for people all over the world. We offer support for immigrants, starting with top of the line English as Second Language Institutions, where we allow everyone to feel at home here, no matter their culture or mother language.','Feel at home <br>in London','banner_english_studies','header_english_studies'),(7,'sports','Sports',NULL,'Check out the best sports <br>scene London has to offer','banner_sports','header_sports'),(8,'arts_culture','Arts & Culture',NULL,'Discover London\'s Art <br>and Culture Scene','banner_arts_culture','header_arts_culture'),(9,'food_restaurants','Food & Restaurants','Enjoy the many diverse cuisines London has to offer in its thriving food culture. The downtown core has anything you need to satisfy your taste buds and more! With a wide variety of pubs, clubs and restaurants, there is always somewhere to go tonight in London.','Enjoy the best food <br>London has to offer','banner_food_restaurants','header_food_restaurants'),(10,'social_life','Social Life',NULL,'Don\'t miss out on <br>London\'s exciting social life','banner_social_life','header_social_life'),(11,'starting','Getting Started','Recently graduated looking for an opportunity in London?','Entry level jobs','work_start','header_starting'),(12,'positions','Open positions','Are you a professional looking for placement?','Looking for jobs','work_open_positions','header_positions'),(13,'resources','Resources','Trying to find your dream job in London?','Find your dream job','work_resources','header_resources'),(14,'cost_life','Cost of life',NULL,'Check out the cost of life <br>difference between London and <br>other cities around the country',NULL,'header_cost_life'),(15,'main_companies','Main Companies',NULL,'Discover here the top hiring <br>companies em London',NULL,'header_main_companies'),(16,'entrepreneurship','Entrepreneurship',NULL,'London is a growing center for <br>new business, attracting investors <br>from all over the world',NULL,'header_entrepreneurship'),(17,'business_sectors','Business Sectors in London',NULL,NULL,NULL,NULL),(18,'economics_choose','Choose London',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_icon`
--

DROP TABLE IF EXISTS `category_icon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_icon` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` smallint(6) NOT NULL,
  `icon_id` smallint(6) NOT NULL,
  `position` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_icon`
--

LOCK TABLES `category_icon` WRITE;
/*!40000 ALTER TABLE `category_icon` DISABLE KEYS */;
INSERT INTO `category_icon` VALUES (1,2,3,1),(2,2,4,2),(3,2,5,4),(4,2,6,3),(5,2,7,5),(6,2,8,6),(7,5,9,1),(8,5,10,2),(9,5,11,3),(10,6,24,1),(11,6,25,2),(12,6,26,3);
/*!40000 ALTER TABLE `category_icon` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_item`
--

LOCK TABLES `category_item` WRITE;
/*!40000 ALTER TABLE `category_item` DISABLE KEYS */;
INSERT INTO `category_item` VALUES (1,1,1,1),(2,1,2,2),(3,1,3,3),(4,1,4,4),(5,1,5,5),(6,1,6,6),(7,3,7,1),(8,3,8,2),(9,3,9,3),(10,4,10,1),(11,4,11,2),(12,5,12,1),(13,5,13,2),(14,5,14,3),(15,6,15,1),(16,6,16,2),(17,6,17,3),(18,7,18,1),(19,7,19,2),(20,7,20,3),(21,7,21,4),(22,7,22,5),(23,8,23,1),(24,8,24,2),(25,8,25,3),(26,8,26,4),(27,9,27,1),(28,9,28,2),(29,9,29,3),(30,10,30,1),(31,10,31,2),(32,10,32,3),(33,10,33,4),(34,11,34,1),(35,11,35,2),(36,11,36,3),(37,12,37,1),(38,12,38,2),(39,13,39,1),(40,13,40,2),(41,13,41,3),(42,17,42,1),(43,17,43,2),(44,17,44,3),(45,17,45,4),(46,17,46,5),(47,18,47,1),(48,18,48,2),(49,18,49,3),(50,15,50,1),(51,15,51,2),(52,15,52,3),(53,15,53,4),(54,15,54,6),(55,15,55,8),(56,15,56,5),(57,15,57,9),(58,15,58,11),(59,15,59,10),(60,15,60,7),(61,15,61,12),(62,16,62,1),(63,16,63,2),(64,16,64,3),(65,16,65,4),(66,16,66,5),(67,16,67,6),(68,16,68,7),(69,14,69,1),(70,14,70,2),(71,14,71,3);
/*!40000 ALTER TABLE `category_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `icon`
--

DROP TABLE IF EXISTS `icon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `icon` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `photo` varchar(200) DEFAULT NULL,
  `alt` varchar(100) DEFAULT NULL,
  `longfield` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `icon`
--

LOCK TABLES `icon` WRITE;
/*!40000 ALTER TABLE `icon` DISABLE KEYS */;
INSERT INTO `icon` VALUES (1,'population','494,069','People live in the city','icon-life-people','People icon','long'),(2,'large_city','15<sup>th</sup>','Largest city <br>in Canada','icon-life-arrow','Arrow up icon',NULL),(3,'safe_city','10<sup>th</sup>','Safest city <br>in Ontario','',NULL,NULL),(4,'trees','358,000','Trees planted for the <br>Million Tree Challenge',NULL,NULL,'long'),(5,'crime_rate','-12<sup>%</sup>','Crime rate the <br>past 5 years',NULL,NULL,NULL),(6,'women_live','6<sup>th</sup>','Best Place for <br>women to live',NULL,NULL,NULL),(7,'best_neighborhood','Woodfield','Best neighborhood <br>in Canada in 2016','icon-life-stars','Stars icon','long'),(8,'volunteer','60<sup>%</sup>','of Londoners <br>volunteer','',NULL,NULL),(9,'high_schools','156','High Schools','education-high','High Schools',NULL),(10,'middle_schools','150','Middle Schools','education-middle','Middle Schools',NULL),(11,'elementary_schools','152','Elementary Schools','education-elementary','Elementary Schools',NULL),(12,'jack_chambers_position','119','2900','education-trophy','Jack Chambers Position',NULL),(13,'jack_chambers_rating','8.5',NULL,'education-4stars','4 stars',NULL),(14,'masonville_school_position','157','2900','education-trophy','Masonville School Position',NULL),(15,'masonville_school_rating','8.3',NULL,'education-4stars','4 stars',NULL),(16,'london_central_position','6','740','education-trophy','London Central Position',NULL),(17,'london_central_rating','9.0',NULL,'education-5stars','5 stars',NULL),(18,'western_alumni','310,000','Alumni living worldwide','education-globe','Student globe',NULL),(19,'western_founded','1878','Founded in','education-flag','Flag',NULL),(20,'western_students','+29,000','Undergraduate and <br>Graduate students','education-students-wes','Students',NULL),(21,'fanshawe_programs','+200','Programs','education-programs','Programs',NULL),(22,'fanshawe_students','43,000','Students each year','education-students-fan','Students',NULL),(23,'fanshawe_countries','65 <span>countries</span>','Students came from','education-countries','Map',NULL),(24,'esl_immigrants','94,690','Immigrants in London','education-passport','Passport',NULL),(25,'esl_first_language','17.8%','English/French is <br>not 1st language','education-book','Book',NULL),(26,'esl_english_french','6,485','Don\'t speak English <br>nor French','education-en-fr','English and French',NULL),(27,'employment_rate','+16<sub>%</sub>','2017 <span>vs</span> 2016',NULL,NULL,NULL),(28,'job_postings','7,400','Job postings',NULL,NULL,NULL),(29,'full_time_positions','77<sub>%</sub>','Full-time',NULL,NULL,NULL),(30,'charity_village','Charity Village',NULL,'logo_charity_village','Charity Village logo','https://charityvillage.com'),(31,'ymca_canada','YMCA of Western Ontario',NULL,'logo_ymca','YMCA Canada logo','http://ymcawo.ca'),(32,'food_bank','London Food Bank',NULL,'logo_food_bank','Food Bank logo','http://www.londonfoodbank.ca'),(33,'pillar','Pillar Nonprofit Network',NULL,'logo_pillar','Pillar logo','http://www.pillarnonprofit.ca');
/*!40000 ALTER TABLE `icon` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'springbank_park','Springbank Park','Springbank Park is a 140-hectare park located along a stretch of the Thames River in London, Ontario. As the largest park in London, it contains 30 km of trails and is home to Storybook Gardens, a family attraction open year-round. The Springbank Park is the largest park in London, with trails accommodating biking or walking.','1085 Commissioners Rd W, London, ON N6K 4Y6','(519) 661-5575','6AM-10PM',NULL,'springbank_park'),(2,'victoria_park','Victoria Park','Victoria Park is a park located in downtown London, Ontario. It is one of the major centres of community events in London, including the Sunfest, the Home County Folk Festival, The London Rib-Fest and The International Food Festival. It also has an ice skating rink in the winter, built every winter since 1913. The area in front of the bandshell now serves as a free, public skatepark, consisting of many metal benches and a stage drop.','509 Clarence St, London, ON N6A 3N1','(519) 661-4529','24h',NULL,'victoria_park'),(3,'fanshawe_conservation','Fanshawe Conservation Area','Fanshawe Conservation Area is a 3,000 acre conservation area created to protect the City of London from flooding. It\'s considered an outdoor playground on the edge of London, being one of three large, multi-use conservation areas in the Upper Thames River watershed. The area offers camping (both seasonal and overnight), boating, canoe and kayak rentals, hiking, picnicking, mountain biking, bird watching, fishing, special events and much more!','1424 Clarke Rd, London, ON N5V 5B9','(519) 951-6181','24h',NULL,'fanshawe_conservation'),(4,'harris_park','Harris Park','','','','',NULL,'harris_park'),(5,'ivey_park','Ivey Park','','','','',NULL,'ivey_park'),(6,'gibbons_park','Gibbons Park','','','','',NULL,'gibbons_park'),(7,'victoria_hospital','Victoria Hospital','Victoria Hospital offers active treatment, acute care, research and teaching hospital, as well as adult and children\'s emergency departments and outpatient services. The hospital also offers mental health services for adults with a serious mental illness, critical care trauma centre, maternal newborn care and Women\'s ambulatory care.','800 Commissioners Rd E, London, ON, N6A 5W9','(519) 685-8500','24h','http://www.lhsc.on.ca/About_Us/LHSC/Maps_Directions/VH/index.htm','victoria_hospital'),(8,'university_hospital','University Hospital','The University Hospital of London offers active treatment, acute care, research and teaching hospital, and also has an emergency department and outpatient services. It also offers specific services, such as Cardiac Care Services, Clinical Neurological Sciences, Intensive Care Unit (ICU), Multi-Organ Transplant Program and Renal Care Program.','339 Windermere Rd, London, ON, N6A 5A5','(519) 663-3197','24h','http://www.lhsc.on.ca/About_Us/LHSC/Maps_Directions/UH/index.htm','university_hospital'),(9,'st_josephs_health','St. Joseph\'s Health Care','St. Joseph\'s Health Care in London, Ontario, offers doctors and nurses assess and treat non-threatening injuries or illnesses that cannot wait for a family doctor. It has on-site diagnostics include x-rays, ultrasounds and laboratory tests.','268 Grosvenor St, London, ON N6A 4V2','(519) 646-6100','9AM-6PM','https://www.sjhc.london.on.ca','st_joseph_health'),(10,'western_university','Western University','Western University is proud to deliver \"The Western Experience\", an exemplary learning experience that engages the best and brightest people challenging them to meet ever-higher standards in the classroom and beyond. Western prepares future leaders to succeed, forming every dimensions of students - intellectual, social, cultural as well as physical. Considered Canada\'s most beautiful university, Western\'s main campus spans 400 acres of Gothic-style buildings mixed with modern, providing a great environment for our community of scholars.','1151 Richmond St, London, ON N6A 3K7','(519) 661-2111',NULL,'http://www.uwo.ca','western_university'),(11,'fanshawe_college','Fanshawe College','Fanshawe is one of Ontario\'s largest colleges &#8212; with four campuses in London, Simcoe, St. Thomas and Woodstock - Fanshawe serves close to half a million people with a promise to educate, engage, empower and excite. The college is proud to provide flexible learning arrangements and experiential education opportunities developed in response to labour market needs.  They offer offer more than 200 degree, diploma, certificate and apprenticeship programs to students each year, helping people unlock their potential and achieve success in a variety of disciplines including applied arts, business, health care, human services, hospitality and technology.','1001 Fanshawe College Boulevard London, ON N5Y 5R6','(519) 452-4277',NULL,'https://www.fanshawec.ca','fanshawe_college'),(12,'jack_chambers_school','Jack Chambers Public School','','1650 Hastings Dr  London, ON N5X3E3','(519)452-8240',NULL,'http://sites.tvdsb.ca/JackChambers.cfm','jack_chambers_school'),(13,'masonville_school','Masonville Public School','','25 Hillview Boulevard London N6G 3A7','(519) 452-8390',NULL,'http://sites.tvdsb.ca/Masonville.cfm','masonville_school'),(14,'london_central_school','London Central Secondary School','','509 Waterloo St London, ON N6B2P8','(519) 433-3388',NULL,'http://sites.tvdsb.ca/Central.cfm','london_central_school'),(15,'london_language_institute','London Language Institute','LLI is a leader in ESL and academic preparation, with more than 18 years experience working with students from all over the world. LLI offers English courses, pathway programming, accredited TESL programs, business courses, CAEL, TOEFL and IELTS Preparation courses, High school and study / vacation programs.','183 Central Ave, Suite 101, London, ON N6A 1M6','(519) 439-3350','8AM-4PM','https://llinstitute.com','london_language_institute'),(16,'wheable_adult_centre','Wheable Adult Education Centre','The school offers the gateway to Learning to upgrade the students\' literacy and numeracy skills, English as a Second Language, high school day and Self Study credit courses, Hairstyling Pre-Apprenticeship Program and Personal Support Worker Program.','70 Jacqueline St, London, ON N5Z 3P7','(519) 452-2660',NULL,'https://www.tvdsb.ca/en/index.aspx','wheable_adult_centre'),(17,'london_international_academy','London International Academy','London International Academy is a Canadian Private Co-ed Secondary Boarding school. It offers academic courses from Grades 9 - 12 and is authorized to grant the Ontario Secondary School Diploma (OSSD). With a strong track record of placing students in Canada\'s top universities, LIA is focused to meet the needs of international ESL students. LIA offers year-round semesters, seasonal camp programs and a variety of extra-curricular activities to ensure a full student life.','361-365 Richmond St, London, ON N6A 3C2','(519) 433-3388',NULL,'http://immigration.london.ca/Learning/Pages/international-academy.aspx','london_international_academy'),(18,'london_knights','The London Knights','Are you a fan of hockey? Support your local team! The London Knights Hockey Club is owned and operated by former \"NHLers\" Mark and Dale Hunter and Basil McRae. The team plays and operates out of Budweiser Gardens in London, Ontario and plays in the Midwest Division of the Western Conference in the Ontario Hockey League. Notable London Knights alumni include: Darryl Sittler, Dino Ciccarelli, Brendan Shannahan, Brad Marsh, Rick Nash and Corey Perry.',NULL,NULL,NULL,'http://londonknights.com','london_knights'),(19,'budweiser_gardens','Budweiser Gardens','Budweiser Gardens opened in 2002 and is a two-time recipient of Major Facility of the Year (awarded at the Canadian Broadcast Industry Awards) in 2010 and 2012. They are experts in hosting and entertainment, partnering with over 300 clients at 400 global properties to create memorable experiences for millions of visitors every year. For sporting events and more, Budweiser gardens is the place to go!','99 Dundas St, London, ON N6A 6K1','(519) 667-5700',NULL,'https://www.budweisergardens.com','budweiser_gardens'),(20,'london_lightning','The London Lightning','Three time National Basketball League of Canada champion (2012, 2013 and 2017), London Lightning has a short yet brilliant history. Founded in 2011, the team is owned by Vito Frijia, current President of the NBL of Canada, and had former NBA all-star player Micheal Ray Richardson as first head coach. Playing its home games at the Budweiser Gardens, the yellow, black and white team promptly has become a proud and victorious symbol of the city.','','',NULL,'http://www.lightningbasketball.ca','london_lightning'),(21,'raceway','The Raceway at the Western Fair District','Since 1961, the Western Fair District has been South Western Ontario\'s place to play! Featuring harness racing at its best &#8212; live on our half-mile track, October through May. Simulcast racing is also available all year round, broadcasting races from all over North America!','','(519) 438-7203',NULL,'https://www.westernfairdistrict.com/raceway','raceway'),(22,'aquatic_centre','Canada Games Aquatic Centre','The Canada Games Aquatic Centre offers recreational and fitness programming all year round. A modern, clean, well-cared for facility, it offers extensive opportunity for aquatic lessons and recreational activities. Close to the skate park, splash pad, arena, restaurants, shopping and both elementary and high schools, it is well utilized by the community.','1045 Wonderland Rd N, London, ON N6G 2Y9','(519) 661-4455','6AM-10PM',NULL,'aquatic_centre'),(23,'museum_london','Museum London','Museum London is Southwestern Ontario\'s leading establishment for the collection and presentation of visual art and material culture. Through public and educational programming, special events and exhibitions, Museum London strives to promote the knowledge and enjoyment of regional art, culture and history.','421 Ridout St N, London, Ontario N6A 5H4','(519) 661-0333','12PM-5PM','http://museumlondon.ca','museum_london'),(24,'royal_regiment_museum','The Royal Canadian Regiment Museum','The Royal Canadian Regiment Museum tells the story of the first infantry regiment established in Canada within the permanent force. The regimental history can be traced back to the War of 1812 and it overlaps with some of the most significant episodes of post-confederation Canadian history.','701 Oxford St E, London, Ontario N5Y 4T7','(519) 660-5275','10AM-4PM','http://www.thercrmuseum.ca','royal_regiment_museum'),(25,'archaeology_museum','Museum of Ontario Archaeology','The Museum of Ontario Archaeology is a unique Canadian museum devoted to the study, display, and interpretation of the human occupation of Southwestern Ontario over the past 13,000 years.','1600 Attawandaron Rd, London, Ontario N6G 3M6','(519) 473-1360','10AM-4:30PM','http://archaeologymuseum.ca','archaeology_museum'),(26,'childrens_museum','London Children\'s Museum','The London Children\'s Museum provides children and their grown-ups with extraordinary hands-on learning experiences in a distinctly child-centred environment. Part of the London community for 40 years, the Children\'s Museum is where more than 80,000 children and their families visit each year to dream and play, and gather to learn and grow.','21 Wharncliffe Rd S, London, Ontario N6J 4G5','(519) 434-5726','10AM-5PM','https://www.londonchildrensmuseum.ca','childrens_museum'),(27,'food_festival','London International Food Festival','London International Food Festival is the host to an array of savoury dishes from around the globe. Partake in games, food and fun in this annual London, Ontario event. As well as offering Hard Root Beer, we are proud to offer our own brand of non-alcohol Festival Root Beer on tap! Presenting Virgin House Music & rocking house music with FM96.',NULL,NULL,NULL,'http://canadasbiggestparty.com/london-international-food-festival','food_festival'),(28,'covent_garden_market','Covent Garden Market','The Covent Garden Markets fresh produce, gourmet foods, unique gifts, Public Square, seasonal outdoor farmers\' Market, ice rink and regular family programming, it continues to build on its long and rich traditions as one of London\'s center of commerce and community.','130 King St, London, ON N6A 1C5','(519) 439-3921','8AM-7PM','http://www.coventmarket.com','covent_garden_market'),(29,'western_fair_market','Western Fair Farmers and Artisan Market','It is known for its Saturday Farmers\' Market. The Market is a popular destination for chefs, cooks and local gastronomes in search of a wide variety of artisanal products and seasonal ingredients. Market-goers love the Market because they can buy high-quality; farm-fresh goods directly from the person who produced them and can find unique products they won\'t discover anywhere else in the city.','900 King St, London, ON N5Y 5P8','(519) 438-5942','SAT: 8AM-3PM','https://www.westernfairdistrict.com/market','western_fair_market'),(30,'ceeps','The Ceeps','This enduring, informal tavern offers typical pub grub, a full bar, DJs & an outdoor patio. In business for 125 years, the ceeps has always been the hot destination for people\'s nights.','671 Richmond St, London, ON N6A 5M8','(519) 432-1425','11AM-2AM','http://www.ceeps.com','ceeps'),(31,'labatt','Labatt Brewery','Take the Labatt Brewery Tour and learn how a great Canadian beer is made. The tour takes about 2 hours and includes a full guided tour of the brewery and sampling. Tours run all year round and must be pre-booked by email or by phone.','150 Simcoe St, London, ON N6A 4M3','(519) 850-8687','10AM-5PM','http://www.labatt.com','labatt'),(32,'music_hall','London Music Hall','London Music Hall is a premier stop for many artists as they tour through Southern Ontario. Acts such as The Arkells, The Trews, Killswitch Engage, Lee Brice, Skrillex, August Burns Red, Calvin Harris, Snoop Dogg & many more have played our venue. Apart from being a venue, London Music Hall also delivers state of the art production.','185 Queens Ave, London, ON N6A 1G7','(519) 432-1107','','https://londonmusichall.com','music_hall'),(33,'toboggan','Toboggan Brewing','In the heart of Downtown, Toboggan mixes perfectly good drink and food with a casual and cozy environment. The Brewery produces ten different types of premium beer, besides its seasonal cider and cocktails. Certainly, it\'s a must go in London!','585 Richmond St, London, ON N6A 3G2','(519) 433-233','SUN-THU: 12PM-11PM, FRI-SAT: 12PM-2AM','http://www.tobogganbrewing.com','toboggan'),(34,'do_research','Do your research','Talk to people in the industry to learn more about what the job is like. You may have an idea of what you want to do, but once you see the work environment you may not find that it\'s the right fit.',NULL,NULL,NULL,NULL,NULL),(35,'get_involved','Get involved','Join a team or volunteer organization. You never know who you might meet that will open the door to your next opportunity. Volunteering is the best way to get to know people and open possibilities for an actual position. It also gives you great experience to add to your resume.',NULL,NULL,NULL,NULL,NULL),(36,'expand_network','Expand your network','If you\'re looking for a new job, tell everyone you know. Attend events, connect with people, engage in the community and spread the word. Most employers hire by word of mouth, so make sure people you talk to know you\'re looking for a new opportunity. There are many local networking groups out there, just take a look.',NULL,NULL,NULL,NULL,NULL),(37,'employment_rates','Employment rates','The number of Internet job postings in London continues to increase: about 16% relative to the same period of 2016. London has 7400 job postings currently, and this data comes also with an overall increasing trend in employment, being full-time employment responsible for 77% of total employment.',NULL,NULL,NULL,NULL,NULL),(38,'hot_positions','Hot positions in town','London\'s digital creative sector is booming, and has approximately 500 open job positions. London Tech Jobs gives access to companies and their job postings, as well as community resources within London\'s growing digital creative sector.',NULL,NULL,NULL,NULL,NULL),(39,'looking_job','Looking for a job','There are many positions available in London and, after networking, researching online is the best way to find the right fit for you.<br>Many websites may help you in this task, here\'s a list with the biggest job posting sources:',NULL,NULL,NULL,NULL,NULL),(40,'extra_help','Getting extra help','Sometimes handling your resume is not enough for getting a job. Creating a clear and reader focused cover letter as well as being prepared for the interview is crucial to be selected among other applicants. Here\'s a list of employment agencies and companies that would help you write your resume, as well as the cover letter and get you prepared for your next step in your career.',NULL,NULL,NULL,NULL,NULL),(41,'job_fair','London and Area Works Job Fair','The London and Area Works Job Fair happens twice a year and  as per the last edition, it attracted more than 50 employers, offering a total of 2,300 jobs, along with a number of employment and training agencies.<br>Rob Collins, from LEDC (London Economic Development Corp.), said that the personal contact made possible through job fairs is still the most popular hiring method for employers. Remember to print your resume and go with your enthusiasm to meet your future employer.',NULL,NULL,NULL,NULL,NULL),(42,'food_processing','Food Processing','<span>60+</span> companies<br><span>7,000+</span> employed',NULL,NULL,NULL,NULL,'business_food_processing'),(43,'health_sciences','Health Sciences','<span>60+</span> companies<br><span>25,000+</span> employed',NULL,NULL,NULL,NULL,'business_health_sciences'),(44,'advanced_manufacturing','Advanced Manufacturing','<span>500+</span> companies<br><span>33,000+</span> employed',NULL,NULL,NULL,NULL,'business_advanced_manufacturing'),(45,'digital_creative','Digital Creative','<span>300+</span> companies<br><span>9,000+</span> employed',NULL,NULL,NULL,NULL,'business_digital_creative'),(46,'professional_services','Professional Services','<span>500+</span> companies<br><span>55,000+</span> employed',NULL,NULL,NULL,NULL,'business_professional_services'),(47,'gdp',NULL,'London\'s GDP grew at a rate of 2.7% 2016, outpacing the Ontario\'s rate of 1.4% and the Canadian rate of 2.6%',NULL,NULL,NULL,NULL,'choose_gdp'),(48,'distance',NULL,'Few hours of driving distance from big commercial centres as Toronto and Detroit, close to six USA border crossings, and within a one-day drive of over 150 million customers',NULL,NULL,NULL,NULL,'choose_flags'),(49,'immigrants',NULL,'Diverse and welcoming community, where immigrants make up more than 22% of population and over 100 languages are spoken in the city',NULL,NULL,NULL,NULL,'choose_globe'),(50,'company_3m','3M',NULL,NULL,NULL,NULL,'https://www.3mcanada.ca','logo_3m'),(51,'company_libro','Libro Credit Union',NULL,NULL,NULL,NULL,'https://www.libro.ca','logo_libro'),(52,'company_autodata','Autodata Solutions',NULL,NULL,NULL,NULL,'http://www.autodata.net','logo_autodata'),(53,'company_blue_bubble','Big Blue Bubble',NULL,NULL,NULL,NULL,'http://www.bigbluebubble.com','logo_blue_bubble'),(54,'company_cargill','Cargill',NULL,NULL,NULL,NULL,'https://www.cargill.ca','logo_cargill'),(55,'company_digital_extremes','Digital Extremes',NULL,NULL,NULL,NULL,'http://www.digitalextremes.com','logo_digital_extremes'),(56,'company_diply','Diply',NULL,NULL,NULL,NULL,'https://diply.com','logo_diply'),(57,'company_goodlife','Goodlife Fitness',NULL,NULL,NULL,NULL,'https://www.goodlifefitness.com','logo_goodlife'),(58,'company_labatt','Labatt Brewery',NULL,NULL,NULL,NULL,'http://www.labatt.com','logo_labatt'),(59,'company_london_health','London Health Sciences Foundation',NULL,NULL,NULL,NULL,'http://www.lhsf.ca','logo_london_health'),(60,'company_nestle','Nestle',NULL,NULL,NULL,NULL,'https://www.corporate.nestle.ca','logo_nestle'),(61,'company_voices','Voices.com',NULL,NULL,NULL,NULL,'https://www.voices.com','logo_voices'),(62,'commercial_space','<span>Affordable</span> commercial spaces','CAD $<span>12</span> per ft<sup>2</sup>',NULL,NULL,NULL,NULL,NULL),(63,'workforce','<span>Workforce</span> skilled people','<span>260,700</span>',NULL,NULL,NULL,NULL,NULL),(64,'entrepreneuship_text',NULL,'London has plenty of fully serviced, industrial space with easy access to the highway. The city also has plenty of retail and commercial space with some starting at CAD $12 per square foot. <br>Along with affordable locations for your business the city has a workforce of 260,700 skilled people ready to work in a variety of industries and sectors.\r\nLondon has several organizations to help you start your business, as London Economic Development Corporation (LEDC), London Small Business Centre, TechAlliance and Service London Business.',NULL,NULL,NULL,NULL,NULL),(65,'techalliance','TechAlliance',NULL,NULL,NULL,NULL,'https://techalliance.ca','logo_techalliance'),(66,'ledc','LEDC',NULL,NULL,NULL,NULL,'https://www.ledc.com','logo_ledc'),(67,'small_business_centre','Small Business Centre',NULL,NULL,NULL,NULL,'http://www.sbcentre.ca','logo_small_business'),(68,'start_london','Start London Canada',NULL,NULL,NULL,NULL,'http://www.startlondoncanada.com','logo_start_london'),(69,'chart_salary_range','Salary Range',NULL,NULL,NULL,NULL,NULL,'chart_salary_range'),(70,'chart_cost_life','Cost of Life',NULL,NULL,NULL,NULL,NULL,'chart_cost_life'),(71,'comparison_toronto','','For example, you would need at least <span>CAD$ 4,971</span> in <span>Toronto</span> to maintain the same standard of living that you can have with <span>CAD$ 3,800</span> in <span>London, Ontario</span>.',NULL,NULL,NULL,NULL,'');
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_icon`
--

DROP TABLE IF EXISTS `item_icon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_icon` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `item_id` tinyint(4) NOT NULL,
  `icon_id` smallint(6) NOT NULL,
  `position` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_icon`
--

LOCK TABLES `item_icon` WRITE;
/*!40000 ALTER TABLE `item_icon` DISABLE KEYS */;
INSERT INTO `item_icon` VALUES (1,2,3,1),(2,2,4,2),(3,2,5,3),(4,2,6,4),(5,2,7,5),(6,2,8,6),(7,10,18,1),(8,10,19,2),(9,10,20,3),(10,11,21,1),(11,11,22,2),(12,11,23,3),(13,37,27,1),(14,37,28,2),(15,37,29,3),(16,12,12,1),(17,12,13,2),(18,13,14,1),(19,13,15,2),(20,14,16,1),(21,14,17,2),(22,35,30,1),(23,35,31,2),(24,35,32,3),(25,35,33,4);
/*!40000 ALTER TABLE `item_icon` ENABLE KEYS */;
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
  `description` text DEFAULT NULL,
  `photo` varchar(200) NOT NULL,
  `icon` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section`
--

LOCK TABLES `section` WRITE;
/*!40000 ALTER TABLE `section` DISABLE KEYS */;
INSERT INTO `section` VALUES (1,'life','Life in London','Creative cities enhance quality of life and London definitely counts with an energetic and engaged community. Our neighborhoods have extraordinary attractions, amenities, heritage, and social opportunities. The inclusive community allows all residents to have a role in helping shaping its future.','banner_life','icon_life'),(2,'education','Education in London','London is a city proud to be a place where people meet and futures are made. Students are encouraged to engage and be hands-on with what they love - creating something, solving problems, helping others - and building a foundation for a lifetime of happiness and success. Students from more than 100 countries share in classroom experiences that broaden personal perspectives and understanding here in London. The city\'s education institutions prides themselves on challenging the best and brightest faculty, staff and students to commit to the highest global standards.','banner_education','icon_education'),(3,'work','Work in London','London has been built on innovative local start-up ventures finding a niche market and growing into successful Canadian and global players. The city has a solid reputation for specialized, well-educated and experienced professionals, what provides affordability, safety and a good work/life balance.','banner_work','icon_work'),(4,'economics','London Economics','Historically, London and Southwestern\'s economy has been an engine of economic growth in Ontario, powered mainly by manufacturing and food-processing industries. More recently, medical research, insurance and information technology have become important fields of London\'s economy, representing significative numbers on employment and market. The city has transitioned to evolve into a technology hub with a focus on the Digital Creative sector.','banner_economics','icon_economics'),(5,'social','Social in London','With a small-town personality and big-city structure, London offers a great lifestyle for young professionals and families. No matter what may be your interests, from music, food or outdoor activities, you\'ll be sure to discover many attractions in this vibrant city.','banner_social','icon_social'),(6,'home','Home',NULL,'banner_home',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section_category`
--

LOCK TABLES `section_category` WRITE;
/*!40000 ALTER TABLE `section_category` DISABLE KEYS */;
INSERT INTO `section_category` VALUES (1,1,1,1),(2,1,2,2),(3,1,3,3),(4,2,4,1),(5,2,5,2),(6,2,6,3),(7,5,7,1),(8,5,8,2),(9,5,9,3),(10,5,10,4),(11,3,11,1),(12,3,12,2),(13,3,13,3),(14,4,14,3),(15,4,15,4),(16,4,16,5),(17,4,17,1),(18,4,18,2);
/*!40000 ALTER TABLE `section_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `section_icon`
--

DROP TABLE IF EXISTS `section_icon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `section_icon` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `section_id` tinyint(4) NOT NULL,
  `icon_id` smallint(6) NOT NULL,
  `position` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section_icon`
--

LOCK TABLES `section_icon` WRITE;
/*!40000 ALTER TABLE `section_icon` DISABLE KEYS */;
INSERT INTO `section_icon` VALUES (1,1,1,1),(2,1,2,3),(3,1,7,2);
/*!40000 ALTER TABLE `section_icon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stories`
--

DROP TABLE IF EXISTS `stories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stories` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `message` text NOT NULL,
  `photo` varchar(200) NOT NULL,
  `section` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stories`
--

LOCK TABLES `stories` WRITE;
/*!40000 ALTER TABLE `stories` DISABLE KEYS */;
INSERT INTO `stories` VALUES (1,'Sarah Lindsey','After graduating Fanshawe College I found the work environment in London to be very welcoming to newcomers in the workforce. Today, I work as a project manager for a marketing agency in the city.','story-sarah.jpg','work'),(2,'Thomas Orlof','When I first started my business I had no problem finding a talented pool of workers to choose from. I was provided with a young passionate group of individuals that helped build my business to what it is today.','story-thomas.jpg','economics'),(3,'Miguel Caran','I found London, Ontario to be a very diverse place when I first moved here. It is wonderful a thing when I am able to experience a new culture while being able to connect with my own at the same time.','story-miguel.jpg','social'),(4,'Rebecca Hopps','When I first started attending Western University I wasn\'t sure what I wanted to do for a career. But, I loved learning and the environment in London, so I stayed in school for as long as I could and found myself working at the University.','story-rebecca.jpg','education'),(5,'Peter Sagan','Growing up in London I experienced a lot of freedom that a city usually doesn\'t often offer people. I have a lot of great memories of growing up around here and wouldn\'t trade it for any other place.','story-peter.jpg','life');
/*!40000 ALTER TABLE `stories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(255) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_level` int(11) NOT NULL,
  `user_last_login` datetime DEFAULT NULL,
  `user_attempt_fail` int(11) DEFAULT 0,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Administrator','admin','$2y$10$CPDwxHyThFBUshrmXoDU7Otr7RM6fGIn.XysTxUj851zEVlQ79f7i','admin@email.com','2018-02-12 05:00:00','::1',1,'2018-04-14 18:56:15',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `video` varchar(255) DEFAULT NULL,
  `header` varchar(150) NOT NULL,
  `poster` varchar(150) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icon` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,'Choose London Video','choose_london','header_home','video_placeholder','London has everything you need: an amazing quality of life, top of the line education institutions, excellent employment opportunities and a thriving social life. A vibrant city with a pulsing personality, a young and creative population and affordable cost of living.','logo_white');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-14 19:19:12
