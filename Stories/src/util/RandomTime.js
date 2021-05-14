export const getRandomTime = () => {
  const rnd = Math.floor(Math.random() * (10 - 1) + 1);

  let when = '';
  if (rnd < 5) {
    const hrs = Math.floor(Math.random() * (12 - 1) + 1);
    const mins = Math.floor(Math.random() * (50 - 1) + 1);
    const fhrs = hrs < 10 ? '0' + hrs : hrs;
    const fmins = mins < 10 ? '0' + mins : mins;
    const when = 'Today , ' + fhrs + ':' + fmins + getampm();
    return when;
  } else if (rnd < 8) {
    const hrs = Math.floor(Math.random() * (12 - 1) + 1);
    const mins = Math.floor(Math.random() * (50 - 1) + 1);
    const fhrs = hrs < 10 ? '0' + hrs : hrs;
    const fmins = mins < 10 ? '0' + mins : mins;
    when = 'Yesterday , ' + fhrs + ':' + fmins + getampm();
    return when;
  } else {
    const mins = Math.floor(Math.random() * (50 - 1) + 1);
    when = mins + ' minutes ago';
    return when;
  }

  return when;
};

const getampm = () => {
  const rnd = Math.floor(Math.random() * (10 - 1) + 1);

  if (rnd < 5) {
    return ' am';
  } else {
    return ' pm';
  }
};
