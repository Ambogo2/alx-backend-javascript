export default function (fileName) {
  return Promise.reject(Error(`${fileName} cannot be processed`));
}
