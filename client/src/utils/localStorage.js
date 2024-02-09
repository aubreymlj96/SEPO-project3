export const getSavedEvents = () => {
    const savedEventIds = localStorage.getItem('saved_events')
      ? JSON.parse(localStorage.getItem('saved_event'))
      : [];
  
    return savedEventIds;
  };
  
  export const saveEvents = (EventIdArr) => {
    if (EventIdArr.length) {
      localStorage.setItem('saved_events', JSON.stringify(EventIdArr));
    } else {
      localStorage.removeItem('saved_events');
    }
  };

  