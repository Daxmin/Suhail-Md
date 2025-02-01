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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349077729692";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "True"; 
global.wlcm  = process.env.WELCOME || "True";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_16_02_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDUwLFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNixcbiAgICAgICAgMjExLFxuICAgICAgICA0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICA4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc2LFxuICAgICAgICA3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY1LFxuICAgICAgICA5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDczLFxuICAgICAgICAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJuY1VsZytJMTdVRmpZUnNDL1dnT2c4UFJXcWxkR1BOY0FkaG9mMVV2R289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZGQ3VKeEYtVFVHYmo1YTA0ZG5iV1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjA1MWRhNTAtYTM1MS00ZDVhLThmMmItNGUyOWU0ZWY3N2Y3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgNTcsXG4gICAgICAzNyxcbiAgICAgIDI1LFxuICAgICAgMjM4LFxuICAgICAgMTE4LFxuICAgICAgMTk3LFxuICAgICAgMzAsXG4gICAgICA5NCxcbiAgICAgIDE3MSxcbiAgICAgIDk4LFxuICAgICAgMjEzLFxuICAgICAgMjE0LFxuICAgICAgMTEwLFxuICAgICAgMjIwLFxuICAgICAgMjksXG4gICAgICAyMjgsXG4gICAgICAyNyxcbiAgICAgIDEyMyxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAyMDIsXG4gICAgICA0LFxuICAgICAgMjAwLFxuICAgICAgMjYsXG4gICAgICAyMjAsXG4gICAgICAxMTAsXG4gICAgICA3NCxcbiAgICAgIDExOCxcbiAgICAgIDYzLFxuICAgICAgNDEsXG4gICAgICAyNDIsXG4gICAgICAyMjcsXG4gICAgICA5NixcbiAgICAgIDEwOCxcbiAgICAgIDE2MixcbiAgICAgIDg3LFxuICAgICAgNDAsXG4gICAgICAxODAsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkU5UFE5RjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzc3Mjk2OTI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNvYWNoIE1hcnRpbnNcIixcbiAgICBcImxpZFwiOiBcIjE3NDE4MzAzNjI1MjM1NTo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tHTHhZNENFTGVlK3J3R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwickV4dERKekVDUGlaR3JpeUE0L05YZ0Mxbm5hbFN0eS9qZGFxblZEbG5DTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJldWtQaUhJRjNwZ3JhTmM1alR1enMwckloSXBDdVl6VG5oWWZzNXRpNzRrSXJaSjVhTHhQWWVpMi95ejhkc0xDZUpBakdjNDlSdHBqVzhhRWJTQlJCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkdEpWSkJJclNDcFFiS0gvK0xuQ0lCcDhpclJUS005cy9RRFQ5NmxLejQvR1RjNkZjNW9UZ2toV2pzMURMbzhleVBXd0l3NFIzRWo0cjRYaTRTK2hDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDc3NzI5NjkyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczODQ0NDYwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9qSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2pILmpzb24iOiAie1wia2V5RGF0YVwiOlwibDU0WGZZYy9TZGU0eVFLQnkxNVRBekpRaGJielJBVGFQQnlRTzVuVlV3ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NjczNjI5NzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzg0NDAyNjQ4MTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
