INSERT INTO public.state_entity (id, state) VALUES (1, 'Pennsylvania');
INSERT INTO public.state_entity (id, state) VALUES (2, 'California');

INSERT INTO public.county_entity (id, county, "stateId") VALUES (1, 'North Side', 1);
INSERT INTO public.county_entity (id, county, "stateId") VALUES (2, 'South Side', 2);

INSERT INTO public.city_entity (id, city, "countyId") VALUES (1, 'Pittsburgh', 1);
INSERT INTO public.city_entity (id, city, "countyId") VALUES (2, 'San Fransisco', 2);

INSERT INTO public.community_entity (id, community, "cityId") VALUES (1, 'Shadyside', 2);

INSERT INTO public.block_entity (id, block, startstreet, endstreet, zipcode, "communityId") VALUES (1, 'Jonnython', '1221 Melwood Ave', '3323 Melwood Ave', '12234', 1);

INSERT INTO public.family_entity (id, family, "blockId") VALUES (1, 'Simpthen', 1);

INSERT INTO public.state_admin_entity (id, username, password, firstname, midname, lastname, phone, email, state) VALUES (1, 'pennAdmin', 'admin123', 'Benjamin', '', 'Button', '2138093432', 'button@123.com', 'Pennsylvania');

INSERT INTO public.community_admin_entity (id, username, password, firstname, midname, lastname, phone, email, state, county, city, community) VALUES (1, 'shadyComAdmin', 'admin123', 'Santa', '', 'Clara', '3749457035', 'clara@123.com', 'Pennsylvania', 'South Side', 'San Fransisco', 'Shadyside');

INSERT INTO public.community_member_entity (id, username, password, firstname, midname, lastname, gender, phone, email, date, addressone, addresstwo, family, block, city, county, state, race, marry, education, employments, assigned, "communityId", "bhcoId") VALUES (2, 'Hammer002', 'imHealthy@2018', 'Hammer', 'Plus', 'Burger', 'Female', '1274093209', 'burger@123.com', '2018-05-23', '1223 Hammer Street', 'apt 231', 'Simpthen', 'Jonnython', 'San Fransisco', 'South Side', 'California', 'Caucasian', 'Single', 'Bachelor', 'Unemployed but Not Currently Looking for Work', false, 1, null);
INSERT INTO public.community_member_entity (id, username, password, firstname, midname, lastname, gender, phone, email, date, addressone, addresstwo, family, block, city, county, state, race, marry, education, employments, assigned, "communityId", "bhcoId") VALUES (1, 'simpthen001', 'imHealthy@2018', 'Simpthen', 'rhiowq', 'Ofew', 'Male', '1243562334', 'simple@123.com', '2018-05-16', '1242 Santa Block', 'Apt 213', 'Simpthen', 'Jonnython', 'San Fransisco', 'South Side', 'California', 'African American', 'Married', 'High School/GED', 'Currently Employed', true, 1, 2);

INSERT INTO public.bhco_entity (id, username, password, firstname, midname, lastname, phone, email, state, county, city, community) VALUES (1, 'bhco001', 'bhco12345', 'Candy', '', 'Block', '12343493', 'candy@123.com', 'California', 'South Side', 'San Fransisco', 'Shadyside');
INSERT INTO public.bhco_entity (id, username, password, firstname, midname, lastname, phone, email, state, county, city, community) VALUES (2, 'bhco002', 'bhco12345', 'Cindy', '', 'Seen', '49302508', 'cindy@123.com', 'California', 'South Side', 'San Fransisco', 'Shadyside');
