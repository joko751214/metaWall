import { ElLoading } from 'element-plus';

let loadingRequestCount = 0;

let loadingInstance;

const showLoading = (target) => {
  console.log(target, 'target');
  if (loadingRequestCount === 0) {
    loadingInstance = ElLoading.service({ target });
  }
  loadingRequestCount++;
  console.log(loadingRequestCount, 'loadingRequestCount++');
};

const hideLoading = () => {
  if (loadingRequestCount <= 0) return;
  loadingRequestCount--;
  console.log(loadingRequestCount, 'loadingRequestCount--');
  if (loadingRequestCount === 0) {
    loadingInstance.close();
  }
};

export { showLoading, hideLoading };
