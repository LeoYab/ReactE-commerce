const products = [
    {
    id: "1",
    name:  "Athlon 3000G",
    description: "2 núcleos y 3.5GHz de frecuencia con gráfica integrada.",
    price: 19000,
    stock: 3,
    category: "CPU",
    subcategory:"",
    img:"/images/CPUs/AMD/Athlon 3000G YD3000C6FHBOX_1.webp",
},
{
    id: "2",
    name: "Ryzen 5 5600G",
    description: "6 núcleos y 4.4GHz de frecuencia con gráfica integrada.",
    price: 40000,
    stock: 5,
    category: "CPU",
    subcategory:".",
    img:"/images/CPUs/AMD/Ryzen 5 5600G 100000252BOX_1.webp",
},
{
    id: "3",
    name: "Ryzen 7 5700G",
    description: "8 núcleos y 4.6GHz de frecuencia con gráfica integrada.",
    price: 83000,
    stock: 4,
    category: "CPU",
    subcategory:".",
    img:"/images/CPUs/AMD/Ryzen 7 5700G 100000263BOX_1.webp",
},
{
    id: "4",
    name: "Core i3 10100",
    description: " 4 núcleos y 4.3GHz de frecuencia con gráfica integrada.",
    price: 20000,
    stock: 6,
    category: "CPU",
    subcategory:".",
    img:"/images/CPUs/Intel/Core i3 10100 BX8070110100_1.webp",
},
{
    id: "5",
    name: "Core i5 6500",
    description: "4 núcleos y 3.6GHz de frecuencia con gráfica integrada",
    price: 28000,
    stock: 8,
    category: "CPU",
    subcategory:".",
    img:"/images/CPUs/Intel/Core i5 6500 CM8066201920404_1.webp",
},
{
    id: "6",
    name: "Core i7 10700F",
    description: "8 núcleos y 4.8GHz de frecuencia",
    price: 67000,
    stock: 7,
    category: "CPU",
    subcategory:".",
    img:"/images/CPUs/Intel/Core i7 10700F BX8070110700F_1.webp",
},
{
    id: "7",
    name: "Seagate Barracuda 1TB",
    description: "Disco Rígido Seagate ST1000DM010",
    price: 8200,
    stock: 3,
    category: "Discos",
    subcategory:".",
    img:"/images/Discos/HDD/Seagate/Seagate Barracuda ST1000DM010 1TB_1.webp",
},
{
    id: "8",
    name: "Seagate Barracuda 2TB",
    description: "Disco Rígido Seagate ST2000DM008",
    price: 12000,
    stock: 8,
    category: "Discos",
    subcategory:".",
    img:"/images/Discos/HDD/Seagate/Seagate Barracuda ST2000DM008 2TB plata_1.webp",
},
{
    id: "9",
    name: "Toshiba Series 500GB",
    description: "Toshiba MQ01ABD Series",
    price: 8450,
    stock: 2,
    category: "Discos",
    subcategory:".",
    img:"/images/Discos/HDD/Toshiba/Toshiba MQ01ABD Series MQ01ABD050 500GB_1.webp",
},
{
    id: "10",
    name: "WD Purple 2TB",
    description: "Western Digital Purple WD20PURX",
    price: 12000,
    stock: 5,
    category: "Discos",
    subcategory:".",
    img:"/images/Discos/HDD/WD/Western Digital WD Purple WD20PURX 2TB purpura_1.webp",
},
{
    id: "11",
    name: "WD Blue 2TB",
    description: "Western Digital Blue WD20EZRZ 2TB",
    price: 13000,
    stock: 16,
    category: "Discos",
    subcategory:".",
    img:"/images/Discos/HDD/WD/Western Digital WD20EZRZ 2TB_1.webp",
},
{
    id: "12",
    name: "WD Blue 1TB",
    description: "Western Digital Blue WD10EZEX 1TB",
    price: 8500,
    stock: 25,
    category: "Discos",
    subcategory:".",
    img:"/images/Discos/HDD/WD/Western Digital WD10EZEX  1TB Caviar_1.webp",
},
{
    id: "13",
    name: "Gigabyte 240Gb",
    description: "Gigabyte GP-GSTFS31240GNTD 240GB",
    price: 5000,
    stock: 14,
    category: "Discos",
    subcategory:".",
    img:"/images/Discos/SSD/Gigabyte/Gigabyte GP-GSTFS31240GNTD 240GB_1.webp",
},
{
    id: "14",
    name: "Kingston 480G ",
    description: "Kingston SA400S37 480GB",
    price: 8300,
    stock: 20,
    category: "Discos",
    subcategory:".",
    img:"/images/Discos/SSD/Kingston/Kingston SA400S37 480G 480GB_1.webp",
},
{
    id: "15",
    name: "Samsung 870 EVO500GB",
    description: "Samsung 870 EVO MZ-77E500 500GB negro",
    price: 20000,
    stock: 4,
    category: "Discos",
    subcategory:".",
    img:"/images/Discos/SSD/Samsung/Samsung 870 EVO MZ-77E500 500GB negro_1.webp",
},
{
    id: "16",
    name: "Corsair Vengance 16GB",
    description: "Corsair Vengeance LPX gamer 16GB 2  color negro CMK16GX4M2B3200C16",
    price: 25000,
    stock: 5,
    category: "Memorias",
    subcategory:".",
    img:"/images/Memorias/Corsair/Vengeance LPX gamer color negro 16GB 2 Corsair CMK16GX4M2B3200C16_1.webp",
},
{
    id: "17",
    name: "Corsair Select 8GB",
    description: "Corsair Value Select 8GB color verde CMSO8GX3M1C1600C11",
    price: 12000,
    stock: 2,
    category: "Memorias",
    subcategory:".",
    img:"/images/Memorias/Corsair/Value Select color verde 8GB 1 Corsair CMSO8GX3M1C1600C11_1.webp",
},
{
    id: "18",
    name: "Corsair Vengeance RGB Pro gamer 16GB",
    description: "Corsair Vengeance RGB Pro gamer color negro 16GB CMW16GX4M2D3600C18",
    price: 15000,
    stock: 8,
    category: "Memorias",
    subcategory:".",
    img:"/images/Memorias/Corsair/Vengeance RGB Pro gamer color negro 16GB 2 Corsair CMW16GX4M2D3600C18_1.webp",
},
{
    id: "19",
    name: "G.skill Trident Z Royal 16GB Ddr4",
    description: "G.skill Trident Z Royal Ddr4 3600mhz RGB",
    price: 24000,
    stock: 2,
    category: "Memorias",
    subcategory:".",
    img:"/images/Memorias/Gskill/Gskill Trident Z Royal Ddr4 3600mhz Rgb_1.webp",
},
{
    id: "20",
    name: "G.Skill Trident Z 16GB",
    description: "G.Skill Trident Z RGB gamer color negro 16GB F4-3600C18D-16GTZR",
    price: 24000,
    stock: 6,
    category: "Memorias",
    subcategory:".",
    img:"/images/Memorias/Gskill/G.Skill Trident Z RGB gamer color negro 16GB 2_1.webp",
},
{
    id: "21",
    name: "Kingston Fury Beast 8GB",
    description: "Kingston Fury Beast DDR4 gamer color negro 8GB KF432C16BB",
    price: 9500,
    stock: 10,
    category: "Memorias",
    subcategory:".",
    img:"/images/Memorias/Kingston/Kingston  Fury Beast DDR4 gamer color negro 8GB_1.webp",
},
{
    id: "22",
    name: "Kingston ValueRAM 8GB",
    description: "Kingston ValueRAM color verde 8GB  KVR16N11/8WP",
    price: 12900,
    stock: 4,
    category: "Memorias",
    subcategory:".",
    img:"/images/Memorias/Kingston/Kingston KVR16N11 8WP.webp",
},
{
    id: "23",
    name: "Kingston ValueRAM 8GB",
    description: "Kingston ValueRAM color verde 8GB KVR32S22S8",
    price: 9000,
    stock: 4,
    category: "Memorias",
    subcategory:".",
    img:"/images/Memorias/Kingston/Kingston ValueRAM color verde 8GB_1.webp",
},
{
    id: "24",
    name: "Kingston ValueRAM 8GB",
    description: "ValueRAM color verde 16GB 1 Kingston KVR26S19D8 16",
    price: 13500,
    stock: 4,
    category: "Memorias",
    subcategory:".",
    img:"/images/Memorias/Kingston/ValueRAM color verde 16GB 1 Kingston KVR26S19D8 16 1.webp",
},
{
    id: "25",
    name: "Asrock B450",
    description: "Asrock Mb Am4 B450 Steel Legend 6 Pci Gamer ",
    price: 30000,
    stock: 5,
    category: "Motherboards",
    subcategory:".",
    img:"/images/Motherboards/Asrock/Asrock Mb Am4 B450 Steel Legend 6 Pci Gamer_1.webp",
},
{
    id: "26",
    name: "Asrock Z390 Phantom Gaming",
    description: "Asrock Z390 Phantom Gaming Lga 1151 M2",
    price: 23000,
    stock: 7,
    category: "Motherboards",
    subcategory:".",
    img:"/images/Motherboards/Asrock/Asrock Z390 Phantom Gaming Lga 1151 M2 Oem Pcreg_1.webp",
},
{
    id: "27",
    name: "Asus A520m-k",
    description: "Asus A520m-k Am4 Ryzen 3ra Gen Hdmi M.2 1",
    price: 14670,
    stock: 3,
    category: "Motherboards",
    subcategory:".",
    img:"/images/Motherboards/Asus/Asus A520m-k Am4 Ryzen 3ra Gen Hdmi M.2_1.webp",
},
{
    id: "28",
    name: "Asus Prime A320m-k",
    description: "Asus Prime A320m-k Am4 Ddr4 Usb 3.0 Hdmi A320",
    price: 12900,
    stock: 3,
    category: "Motherboard",
    subcategory:".",
    img:"/images/Motherboards/Asus/Asus Prime A320m-k Am4 Ddr4 Usb 3.0 Hdmi A320_1.webp",
},
{
    id: "29",
    name: "Asus Rog Strix B550-f",
    description: "Asus Rog Strix B550-f Gaming Wi-fi Am4 3ra Gen",
    price: 73000,
    stock: 2,
    category: "Motherboards",
    subcategory:".",
    img:"/images/Motherboards/Asus/Asus Rog Strix B550-f Gaming Wi-fi Am4 3ra Gen_1.webp",
},
{
    id: "30",
    name: "Asus Tuf Gaming X570 Plus",
    description: "Asus Tuf Gaming X570 Plus Wifi Am4 Ryzen Ddr4",
    price: 53000,
    stock: 1,
    category: "Motherboards",
    subcategory:".",
    img:"/images/Motherboards/Asus/Asus Tuf Gaming X570 Plus Wifi Am4 Ryzen Ddr4_1.webp",
},
{
    id: "31",
    name: "Gigabyte B550-UD DS3H",
    description: "Gigabyte B550-UD DS3H 1.0 Am4 Amd Ryzen",
    price: 26000,
    stock: 2,
    category: "Motherboards",
    subcategory:".",
    img:"/images/Motherboards/Gigabyte/Gigabyte B550 Ud Ds3h 1.0 Am4 Amd Ryzen_1.webp",
},
{
    id: "32",
    name: "Gigabyte H310m",
    description: "Gigabyte H310m M.2 2.0 Ddr4 9na Gen Socket 1151",
    price: 12990,
    stock: 6,
    category: "Motherboards",
    subcategory:".",
    img:"/images/Motherboards/Gigabyte/Gigabyte H310m M.2 2.0 Ddr4 9na Gen Socket 1151_1.webp",
},
{
    id: "33",
    name: "Gigabyte Z690",
    description: "Gigabyte Z690 Ud Ax Ddr5 Socket 1700",
    price: 57890,
    stock: 1,
    category: "Motherboards",
    subcategory:".",
    img:"/images/Motherboards/Gigabyte/Gigabyte Z690 Ud Ax Ddr5 Socket 1700_1.webp",
},
{
    id: "34",
    name: "Msi A320m-a Pro Max",
    description: "Msi A320m-a Pro Max Amd Am4 Ryzen",
    price: 13000,
    stock: 4,
    category: "Motherboards",
    subcategory:".",
    img:"/images/Motherboards/MSI/Msi A320m-a Pro Max Amd Am4 Ryzen_1.webp",
},
{
    id: "35",
    name: "Msi B450 Gaming Plus Max",
    description: "Msi B450 Gaming Plus Max para minería",
    price: 30000,
    stock: 1,
    category: "Motherboards",
    subcategory:".",
    img:"/images/Motherboards/MSI/Msi B450 Gaming Plus Max_1.webp",
},
{
    id: "36",
    name: "Msi Z590 Gaming Carbon",
    description: "Msi Z590 Gaming Carbon Wifi S1200 Ddr4 11va Gen",
    price: 56000,
    stock: 3,
    category: "Motherboards",
    subcategory:".",
    img:"/images/Motherboards/MSI/Msi Z590 Gaming Carbon Wifi S1200 Ddr4 11va Gen_1.webp",
},
{
    id: "37",
    name: "Asus TUF Gaming RX 6700",
    description: "Asus TUF Gaming Radeon RX 6700 Series TUF OC Edition 12GB",
    price: 157000,
    stock: 1,
    category: "Video",
    subcategory:".",
    img:"/images/VideoCards/AMD/Asus TUF Gaming Radeon RX 6700 Series TUF OC Edition 12GB_1.webp",
},
{
    id: "38",
    name: "Radeon RX 6700",
    description: "PowerColor Red Devil Radeon RX 6700 Series 12GBD6 3DHEOC 12GB 1",
    price: 130900,
    stock: 2,
    category: "Video",
    subcategory:".",
    img:"/images/VideoCards/AMD/PowerColor Red Devil Radeon RX 6700 Series 12GBD6 3DHEOC 12GB_1.webp",
},
{
    id: "39",
    name: "Sapphire Nitro+ Radeon RX 6600",
    description: "Sapphire Nitro+ Radeon RX 6600 Series RX 6600 XT 11309-01-20G 8GB",
    price: 110000,
    stock: 2,
    category: "Video",
    subcategory:".",
    img:"/images/VideoCards/AMD/Sapphire Nitro+ Radeon RX 6600 Series RX 6600 XT 11309-01-20G 8GB_1.webp",
},
{
    id: "40",
    name: "Evga GeForce RTX 3080 Ti",
    description: "Evga FTW3 Ultra Gaming RTX 3080 Ti 12GB",
    price: 193000,
    stock: 1,
    category: "Video",
    subcategory:".",
    img:"/images/VideoCards/Nvidia/Evga FTW3 Ultra Gaming RTX 3080 Ti 12GB_1.webp",
},
{
    id: "41",
    name: "Gigabyte GeForce GTX 1660 SUPER",
    description: "Gigabyte GeForce GTX 1660 SUPER GV-N166SOC-6GD OC Edition 6GB",
    price: 157800,
    stock: 2,
    category: "Video",
    subcategory:".",
    img:"/images/VideoCards/Nvidia/Gigabyte GeForce GTX 1660 SUPEROC Edition 6GB_1.webp",
},
{
    id: "42",
    name: "MSI Ventus XS GTX 1660 OC Edition",
    description: "MSI Ventus XS GTX 1660 OC Edition 6GB",
    price: 85000,
    stock: 1,
    category: "Video",
    subcategory:".",
    img:"/images/VideoCards/Nvidia/Nvidia MSI Ventus XS GeForce GTX 1660 OC Edition 6GB_1.webp",
},
{
    id: "43",
    name: "Zotac Gaming RTX 3090",
    description: "Zotac Gaming GeForce RTX 3090 ZT-A30900D-10P 24GB",
    price: 305000,
    stock: 1,
    category: "Video",
    subcategory:".",
    img:"/images/VideoCards/Nvidia/Zotac Gaming GeForce RTX 3090  24GB_1.webp",
},

]

export default products