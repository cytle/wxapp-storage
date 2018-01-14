export function get(key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key,
      success: ({ data }) => resolve(data),
      fail: reject,
    });
  });
}

export function set(key, data) {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key,
      data,
      success: resolve,
      fail: reject,
    });
  });
}

export default {
  get,
  set,
};
