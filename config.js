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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_59_01_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEzLFxuICAgICAgICA0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDcwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM3Nxd0ZYZ05SMHFCNTBPYnhkY1YvVllNUjVvUyt5bnNVTnN2SDVJVGphYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNk9UcV9odUlRZnlsMFBGVmRWTUlYd1wiLFxuICBcInBob25lSWRcIjogXCJlNDdmZWExMi1jMDY5LTQ4OGItOTViYS1iNWNlNTI2ZmE4MGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgNjksXG4gICAgICAyMzUsXG4gICAgICAyMDUsXG4gICAgICAyMDMsXG4gICAgICAxMzgsXG4gICAgICAxMTksXG4gICAgICAxOTEsXG4gICAgICA4MixcbiAgICAgIDgxLFxuICAgICAgMTMzLFxuICAgICAgMjUyLFxuICAgICAgMTkxLFxuICAgICAgMTIwLFxuICAgICAgOTQsXG4gICAgICAxNjIsXG4gICAgICAxMzYsXG4gICAgICAxNTgsXG4gICAgICAxMDMsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAxNjAsXG4gICAgICAyMTUsXG4gICAgICA0NCxcbiAgICAgIDI0OSxcbiAgICAgIDIzNixcbiAgICAgIDIwOSxcbiAgICAgIDE5MixcbiAgICAgIDI1NCxcbiAgICAgIDE3OSxcbiAgICAgIDY5LFxuICAgICAgMjMzLFxuICAgICAgMzUsXG4gICAgICAxNTYsXG4gICAgICAxNDgsXG4gICAgICAxMTcsXG4gICAgICA5NCxcbiAgICAgIDEzNixcbiAgICAgIDI0MSxcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHSlRZN0paTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3NzcyOTY5Mjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ29hY2ggTWFydGluc1wiLFxuICAgIFwibGlkXCI6IFwiMTc0MTgzMDM2MjUyMzU1OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0NMeFk0Q0VLWFg5THdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyRXh0REp6RUNQaVpHcml5QTQvTlhnQzFubmFsU3R5L2pkYXFuVkRsbkNNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdEOEdjMXBCU2ZiMTcrNENreW9CcTZBOExwdUd2cmkzaTNtLzB0TGh2eG4rK2VrUW1CNXdBOGRKN0cwa2lBbTlXV3pHQXNGUXpkUTkzWHc2Uy9mc0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkx1UHdOMFgwWDU4WWNpbHRycnh0UloydDdRajkxekFsOGlReWMxaFAvWWN2dUZoNlFiL0x0K3dqczYrZk5KTnE2WHdqYzZjcW90QldOVmUxNFl1eUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzc3Mjk2OTI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM4MzUzNTgwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
