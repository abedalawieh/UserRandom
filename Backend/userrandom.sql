-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: userrandom
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(25) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Abed','StoryOfSuccess'),(2,'Yumi','Shell-0234');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersdata`
--

DROP TABLE IF EXISTS `usersdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usersdata` (
  `userid` int(255) NOT NULL,
  `uuid` text NOT NULL,
  `picture` text NOT NULL,
  `name` text NOT NULL,
  `location` text NOT NULL,
  `email` text NOT NULL,
  `phone` text NOT NULL,
  `nationality` text NOT NULL,
  `dob` timestamp(6) NULL DEFAULT NULL ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersdata`
--

LOCK TABLES `usersdata` WRITE;
/*!40000 ALTER TABLE `usersdata` DISABLE KEYS */;
INSERT INTO `usersdata` VALUES (1,'ff646b8b-69f1-4cae-8cea-a722e8cc4174','https://randomuser.me/api/portraits/men/9.jpg','Mr. Edgar Monteiro','7762 Rua Dois, Santa Cruz do Sul, Piauí, Brazil','edgar.monteiro@example.com','(41) 1680-9648','BR','1970-01-01 00:00:00.658000'),(2,'83efe7c0-da02-4a97-b835-b531bfccb857','https://randomuser.me/api/portraits/men/7.jpg','Mr. Miroslav Weimer','7510 Mühlenweg, Lingen (Ems), Hamburg, Germany','miroslav.weimer@example.com','0577-5067073','DE','1978-06-03 23:08:35.299000'),(2,'11c49da2-1290-418b-b91a-b0b6a16b1e8c','https://randomuser.me/api/portraits/men/39.jpg','Mr. Radenko Rakić','8848 Berkovačka, Belgrade, Pčinja, Serbia','radenko.rakic@example.com','028-1052-307','RS','1987-11-21 09:34:59.963000'),(2,'ed2a94e1-1ab2-4518-b1c0-47fac269d209','https://randomuser.me/api/portraits/men/8.jpg','Mr. Enrique Amador','7855 Continuación Grecia, Luces del Mar, Estado de Mexico, Mexico','enrique.amador@example.com','(629) 778 7780','MX','1970-02-14 00:53:03.714000'),(2,'1b87b43a-373f-45ef-b9fe-a340dc775a66','https://randomuser.me/api/portraits/women/24.jpg','Ms. Abigail Ambrose','2573 Frederick Ave, Melbourne, Manitoba, Canada','abigail.ambrose@example.com','V61 V88-3798','CA','1974-05-13 07:51:11.161000'),(1,'2699dd6e-5b90-4fff-bbd3-11f2e191f11f','https://randomuser.me/api/portraits/men/15.jpg','Mr. Vitaliy Kolos','vitaliy.kolos@example.com','5924 Stavkova, Sumi, Kiyivska, Ukraine','(099) C50-9119','UA','1970-01-01 00:00:00.801000'),(0,'04ddd6d1-f4af-4574-aee9-29ab2c11a58c','https://randomuser.me/api/portraits/women/17.jpg','Ms. Alix Fernandez','8718 Rue Barrème, Saint-Denis, Aude, France','alix.fernandez@example.com','05-10-63-57-61','FR','1981-06-15 14:44:37.956000'),(0,'87f1e952-f8ec-4843-adbc-f9337dbcaf80','https://randomuser.me/api/portraits/women/46.jpg','Mrs. Slađana Zdravković','2408 Markovačka, Tutin, Rasina, Serbia','sladana.zdravkovic@example.com','018-4500-450','RS','1978-05-29 03:09:21.798000'),(0,'57f84992-73e6-4800-a80f-aa83dab42d6d','https://randomuser.me/api/portraits/men/43.jpg','Mr. Agustín Carmona','547 Calle de Téllez, Móstoles, Comunidad Valenciana, Spain','agustin.carmona@example.com','948-499-104','ES','1970-01-01 00:00:00.240000'),(0,'630e732c-c382-4cd1-b684-1c5946dbef9a','https://randomuser.me/api/portraits/men/61.jpg','Mr. Harvey Fisher','9121 Mcgowen St, Cupertino, Connecticut, United States','harvey.fisher@example.com','(448) 799-5675','US','1987-07-31 00:18:52.080000'),(0,'85bff907-d796-40d2-be3e-cee32f6383b9','https://randomuser.me/api/portraits/women/25.jpg','Miss. Stella Hall','4238 Dominion Road, Nelson, Gisborne, New Zealand','stella.hall@example.com','(747)-119-9941','NZ','1974-03-21 07:08:31.616000'),(0,'13daed01-98c4-4c7b-a2fe-f715d0cdb532','https://randomuser.me/api/portraits/women/55.jpg','Mrs. Kripa Vernekar','9617 Commercial St, Guntur, Jharkhand, India','kripa.vernekar@example.com','8252088372','IN','1970-01-01 00:00:00.726000'),(1,'ae095233-ba1b-4a09-a4d9-79a8fa0cb430','https://randomuser.me/api/portraits/women/96.jpg','Miss. Marinei Rodrigues','3432 Rua Bela Vista , Colombo, Ceará, Brazil','marinei.rodrigues@example.com','(60) 8622-0498','BR','1980-11-02 00:32:24.095000'),(1,'d9d90621-b18b-4821-a79f-c4fc02ec5d9a','https://randomuser.me/api/portraits/women/0.jpg','Ms. Teodora Preković','312 Koprivnička, Čačak, Jablanica, Serbia','teodora.prekovic@example.com','019-7385-645','RS','1997-12-19 18:49:41.988000'),(1,'378c231a-35d8-427b-8163-ca1699cc6061','https://randomuser.me/api/portraits/women/59.jpg','Mrs. Diandra Marijnissen','diandra.marijnissen@example.com','1531 Boterakkers, Bolsward, Overijssel, Netherlands','(067) 7403075','NL','1970-01-01 00:00:00.617000'),(1,'ff80570b-5f52-4b92-88c3-44d543d3b238','https://randomuser.me/api/portraits/women/26.jpg','Mrs. Vildan Özkök','vildan.ozkok@example.com','3600 Istiklal Cd, Ağrı, Tekirdağ, Turkey','(282)-611-5665','TR','1992-04-04 00:08:17.555000'),(1,'a9d74bff-460f-40a0-8a0a-8c467e504a7c','https://randomuser.me/api/portraits/men/43.jpg','Mr. Marion Mcdonalid','marion.mcdonalid@example.com','4579 First Street, Queanbeyan, Western Australia, Australia','04-8302-6478','AU','1988-02-05 12:46:07.087000'),(1,'938c9d76-5902-4580-8cb5-be99a2ce6dcf','https://randomuser.me/api/portraits/men/60.jpg','Mr. Marnik Faber','marnik.faber@example.com','7834 Gezina van der Molenlanden, Uddel, Limburg, Netherlands','(061) 8848797','NL','1996-11-25 18:56:11.892000'),(1,'f2b0ee60-65e2-45a6-ba0d-dad01b5e9d36','https://randomuser.me/api/portraits/women/6.jpg','Ms. Tilde Christiansen','tilde.christiansen@example.com','8764 Vester Alle, København S, Danmark, Denmark','73958144','DK','1993-06-10 17:49:52.558000'),(1,'8438afcb-e9ed-473f-a668-ec2aee7d8288','https://randomuser.me/api/portraits/men/66.jpg','Mr. Josh Ford','josh.ford@example.com','5096 Queensway, Wolverhampton, Somerset, United Kingdom','017683 86785','GB','1990-02-04 06:15:37.920000'),(1,'9af9f2f9-21f4-42f9-806e-1b566798d089','https://randomuser.me/api/portraits/women/39.jpg','Ms. فاطمه زهرا موسوی','9934 ایران, گلستان, لرستان, Iran','ftmhzhr.mwswy@example.com','045-58055453','IR','1970-01-01 00:00:00.445000'),(1,'619d7b2f-a496-4690-9d2e-1854bde6409a','https://randomuser.me/api/portraits/men/26.jpg','Mr. رهام محمدخان','3586 نبرد, اصفهان, کهگیلویه و بویراحمد, Iran','rhm.mhmdkhn@example.com','040-15535065','IR','1987-03-23 06:07:41.380000'),(1,'49519825-c2aa-432b-aa9d-228cd52b2f72','https://randomuser.me/api/portraits/women/80.jpg','Miss. Eline Marie','5927 Rue de L\'Abbé-Gillet, Besançon, Guadeloupe, France','eline.marie@example.com','02-17-19-41-87','FR','1975-08-02 23:45:56.644000'),(1,'7ae4cd4a-bb11-4dfd-a4c5-5183ede61dd3','https://randomuser.me/api/portraits/women/7.jpg','Miss. Esperanza Giménez','1903 Paseo de Extremadura, Toledo, País Vasco, Spain','esperanza.gimenez@example.com','963-269-501','ES','1970-01-01 00:00:00.832000'),(1,'54657d1b-1a53-4bf8-810f-d00ed89f6eb6','https://randomuser.me/api/portraits/men/53.jpg','Mr. Basile Nguyen','5277 Rue de L\'Abbé-Gillet, Clermont-Ferrand, Loire, France','basile.nguyen@example.com','03-76-40-50-01','FR','1973-01-18 08:39:36.913000'),(1,'4622bd88-4807-4f5f-a5ef-42348489ca70','https://randomuser.me/api/portraits/women/21.jpg','Miss. Funda Wildeman','2633 Hoogveldstraat, Heibloem, Flevoland, Netherlands','funda.wildeman@example.com','(0427) 974709','NL','1997-08-25 12:47:30.055000'),(1,'12afb233-3a91-45f3-9a1b-84f1c4c51689','https://randomuser.me/api/portraits/men/86.jpg','Mr. Stephen Kast','2094 Schulstraße, Werdohl, Thüringen, Germany','stephen.kast@example.com','0545-8962762','DE','1970-01-01 00:00:00.243000'),(1,'fe0d0dd0-e036-4b15-a6b2-a74bfb7b0e97','https://randomuser.me/api/portraits/men/69.jpg','Mr. Jamie Howell','7038 Main Street, Carrigaline, Clare, Ireland','jamie.howell@example.com','051-305-6131','IE','1970-09-15 08:32:49.030000');
/*!40000 ALTER TABLE `usersdata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-13 19:05:57
