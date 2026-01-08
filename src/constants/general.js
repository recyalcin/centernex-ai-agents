export const GLOBALS = {
  APP_NAME: "Centernex AI",
  SUPPORT_EMAIL: "contact@centernex.com",
  PHONE_NUMBER: "+1-800-123-4567",
  ADDRESS: "123 AI Street, Tech City, TX, USA",
  CALENDAR: "https://api.centernex.com/widget/bookings/book-a-meeting-23421231231",
}

export const navigate = (p) => {
    window.location.hash = p;
};

// Hem default hem named olarak dışa aktarmış olduk
export default GLOBALS;