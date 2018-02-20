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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'parks','Parks','Commonly known as \"The Forest City,\" London values its natural heritage and environment. Our parks and natural areas are essential to ecological survival and contribute to the overall quality of life in London. Recreation and leisure are also opportunities for belonging in our community by supporting strong families bonds and building strong neighbourhoods.','Find out the best Parks in London','banner_parks','header_parks'),(2,'safety','Safety','The city of London believes in promoting the development of strong neighbourhoods, healthy lifestyles, and sustainable environments. Neighbourhoods are about people and places and how they work in partnership to make great places to live, work and play. An ideal environment contributes for increasing personal health, developing stronger social skills and reducing stress.','Check out what makes London Safe','banner_safety','header_safety'),(3,'health','Health','London is known as a hub of health services and community support, serving patients from Middlesex and other Southern Ontario areas. Citizens and residents may apply to have free access to health-care services by Medicare system, allowing them to make appointments, treatments and receive family doctor visits. Urgent and life-threatening emergency care is guaranteed for anyone, regardless their immigration status.\r\nLondon counts with world renowned research institutes as well as two regional teaching institutes. London Health Science Centre, a hospital network that operates University Hospital and Victoria Hospital, is Ontario\'s largest employer and trains more than 1,800 medical and care professionals annually, being reference in research and health service. A city with an entrepreneurship culture, when combined with unique health care solutions, offers an environment where medical innovation can succeed.','Discover more about the health system in London','banner_health','header_health');
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_item`
--

LOCK TABLES `category_item` WRITE;
/*!40000 ALTER TABLE `category_item` DISABLE KEYS */;
INSERT INTO `category_item` VALUES (1,1,1,1),(2,1,2,2),(3,1,3,3),(4,1,4,4),(5,1,5,5),(6,1,6,6),(7,3,7,1),(8,3,8,2),(9,3,9,3);
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
  `title` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `hours` varchar(200) DEFAULT NULL,
  `website` varchar(200) DEFAULT NULL,
  `photo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'Springbank Park','Springbank Park is a 140-hectare park located along a stretch of the Thames River in London, Ontario. As the largest park in London, it contains 30 km of trails and is home to Storybook Gardens, a family attraction open year-round. The Springbank Park is the largest park in London, with trails accommodating biking or walking.','1085 Commissioners Rd W, London, ON N6K 4Y6','(519) 661-5575','6AM-10PM',NULL,'springbank_park'),(2,'Victoria Park','Victoria Park is a park located in downtown London, Ontario. It is one of the major centres of community events in London, including the Sunfest, the Home County Folk Festival, The London Rib-Fest and The International Food Festival. It also has an ice skating rink in the winter, built every winter since 1913. The area in front of the bandshell now serves as a free, public skatepark, consisting of many metal benches and a stage drop.','509 Clarence St, London, ON N6A 3N1','(519) 661-4529','24h',NULL,'victoria_park'),(3,'Fanshawe Conservation Area','Fanshawe Conservation Area is a 3,000 acre conservation area created to protect the City of London from flooding. It\'s considered an outdoor playground on the edge of London, being one of three large, multi-use conservation areas in the Upper Thames River watershed. The area offers camping (both seasonal and overnight), boating, canoe and kayak rentals, hiking, picnicking, mountain biking, bird watching, fishing, special events and much more!','1424 Clarke Rd, London, ON N5V 5B9','(519) 951-6181','24h',NULL,'fanshawe_conservation'),(4,'Harris Park','','','','',NULL,'harris_park'),(5,'Ivey Park','','','','',NULL,'ivey_park'),(6,'Gibbons Park','','','','',NULL,'gibbons_park'),(7,'Victoria Hospital','Victoria Hospital offers active treatment, acute care, research and teaching hospital, as well as adult and children\'s emergency departments and outpatient services. The hospital also offers mental health services for adults with a serious mental illness, critical care trauma centre, maternal newborn care and Women\'s ambulatory care.','800 Commissioners Rd E, London, ON, N6A 5W9','(519) 685-8500','24h','http://www.lhsc.on.ca/About_Us/LHSC/Maps_Directions/VH/index.htm','victoria_hospital'),(8,'University Hospital','The University Hospital of London offers active treatment, acute care, research and teaching hospital, and also has an emergency department and outpatient services. It also offers specific services, such as Cardiac Care Services, Clinical Neurological Sciences, Intensive Care Unit (ICU), Multi-Organ Transplant Program and Renal Care Program.','339 Windermere Rd, London, ON, N6A 5A5','(519) 663-3197','24h','http://www.lhsc.on.ca/About_Us/LHSC/Maps_Directions/UH/index.htm','university_hospital'),(9,'St. Joseph\'s Health Care','St. Joseph\'s Health Care in London, Ontario, offers doctors and nurses assess and treat non-threatening injuries or illnesses that cannot wait for a family doctor. It has on-site diagnostics include x-rays, ultrasounds and laboratory tests.','268 Grosvenor St, London, ON N6A 4V2','(519) 646-6100','9AM-6PM','https://www.sjhc.london.on.ca','st_joseph_health');
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
INSERT INTO `section` VALUES (1,'life','Life in London','Creative cities enhance quality of life and London definitely counts with an energetic and engaged community. Our neighborhoods have extraordinary attractions, amenities, heritage, and social opportunities. The inclusive community allows all residents to have a role in helping shaping its future.','banner_life','icon_life'),(2,'education','Education in London','London is a city proud to be a place where people meet and futures are made. Students are encouraged to engage and be hands-on with what they love - creating something, solving problems, helping others - and building a foundation for a lifetime of happiness and success. Students from more than 100 countries share in classroom experiences that broaden personal perspectives and understanding here in London. The city\'s education institutions prides themselves on challenging the best and brightest faculty, staff and students to commit to the highest global standards.','banner_education','icon_education'),(3,'work','Work in London','London has been built on innovative local start-up ventures finding a niche market and growing into successful Canadian and global players. The city has a solid reputation for specialized, well-educated and experienced professionals, what provides affordability, safety and a good work/life balance.','banner_work','icon_work'),(4,'economics','London Economics','Historically, London and Southwestern’s economy has been an engine of economic growth in Ontario, powered mainly by manufacturing and food-processing industries. More recently, medical research, insurance and information technology have become important fields of London’s economy, representing significative numbers on employment and market. The city has transitioned to evolve into a technology hub with a focus on the Digital Creative sector.','banner_economics','icon_economics'),(5,'social','Social in London','With a small-town personality and big-city structure, London offers a great lifestyle for young professionals and families. No matter what may be your interests, from music, food or outdoor activities, you\'ll be sure to discover many attractions in this vibrant city.','banner_social','icon_social');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section_category`
--

LOCK TABLES `section_category` WRITE;
/*!40000 ALTER TABLE `section_category` DISABLE KEYS */;
INSERT INTO `section_category` VALUES (1,1,1,1),(2,1,2,2),(3,1,3,3);
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

-- Dump completed on 2018-02-20  1:08:11
