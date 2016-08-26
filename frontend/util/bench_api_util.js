export const fetchBenches = (filters, success, error) => {
  $.ajax({
    method: 'get',
    url: 'api/benches',
    data: filters,
    success,
    error
  });
};
