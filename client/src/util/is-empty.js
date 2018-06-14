const isEmpty = (data) => (
  data === undefined ||
  data === null ||
  (typeof data === 'Object' && Object.keys(data).length === 0) ||
  (typeof data === 'String' && data.trim().length === 0)
)

export default isEmpty