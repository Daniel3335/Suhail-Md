const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349045943853";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_19_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM1LFxuICAgICAgICA5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NixcbiAgICAgICAgMTc1LFxuICAgICAgICA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgODYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgxLFxuICAgICAgICA5NSxcbiAgICAgICAgNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5ZWZDRUcvbmtOWFFMV2pBQmx0eGo0T1Z5V1J5czAydmxJaytQREpNcm9FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1eTctZzNNWFNlbWFsRDNSSWdNZXVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM1ZGM5NWVjLTk5N2ItNGE3NC05YmJmLWEwMmU5ZDFiOTNmMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDEyOCxcbiAgICAgIDIzMSxcbiAgICAgIDE4OSxcbiAgICAgIDIsXG4gICAgICAyLFxuICAgICAgMjM5LFxuICAgICAgOTEsXG4gICAgICA0NyxcbiAgICAgIDM1LFxuICAgICAgOTAsXG4gICAgICAxNSxcbiAgICAgIDI1LFxuICAgICAgODcsXG4gICAgICAxNCxcbiAgICAgIDg0LFxuICAgICAgMjM1LFxuICAgICAgMTA0LFxuICAgICAgNTUsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICAxNzYsXG4gICAgICAxODksXG4gICAgICAxNjcsXG4gICAgICAyMDgsXG4gICAgICAyMzAsXG4gICAgICA0MSxcbiAgICAgIDE2NCxcbiAgICAgIDEyNyxcbiAgICAgIDg4LFxuICAgICAgMTEzLFxuICAgICAgMSxcbiAgICAgIDIyMyxcbiAgICAgIDExNixcbiAgICAgIDIwMCxcbiAgICAgIDExMixcbiAgICAgIDE4MCxcbiAgICAgIDIxMSxcbiAgICAgIDkzLFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkpLNTM3RlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDU5NDM4NTM6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEYW5pZWwgRGF5b1wiLFxuICAgIFwibGlkXCI6IFwiMTY3OTIwNjM4Mzg2MzU5OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0srbzNKd0JFSWVnZ2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiejY2OTdvMW5qNWkzbDRmOUtFUll6RWpaNHZVbzJSczZzaGptZkg5TGtXcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYTzhmejR0RS9Dbjl4eTdMb0VLc1lCOXRYT3dOT29uVWZQRGYwakZnS2lmNzVMWjlBWUNvd05ueE85QUF4UzNyallPNFB5Y0NMYjl2cUU2UmJKUm9EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4bWtqTlJTTEFoblovTnRPS0hhMElTZG1IT3hxR1RGS2Q2T0J4Q1JUeldveDBWdmh4K2JEdVE1OXZEWUtlNDBqcGg2cVhIUVMwajVxVjA1dVJxdVVDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ1OTQzODUzOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5Njg1MTMzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
