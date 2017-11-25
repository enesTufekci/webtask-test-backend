const Hub = () => {
  const hub = Object.create(null);
  hub.devices = {
    lights: false,
    curtains: false,
    heater: false,
    tv: false,
  };
  hub.switch = (device) => {
    if (hub.devices[device] !== undefined) {
      const currentStatus = hub.devices[device];
      hub.devices = { ...hub.devices, [device]: !currentStatus };
      return {
        message: `${device.toUpperCase()} is switched ${currentStatus ? 'off' : 'on'}`,
        success: true,
      };
    }
    return {
      message: `${device.toUpperCase()} is not defined`,
      success: false,
    };
  };

  return hub;
};

export default Hub();
