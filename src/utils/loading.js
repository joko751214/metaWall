import { ElLoading } from 'element-plus';

let loadingRequestCount = 0;

let loadingInstance;

const showLoading = (target) => {
  if (loadingRequestCount === 0) {
    loadingInstance = ElLoading.service({
      text: 'Loading...',
      background: 'rgba(255, 255, 255, 0.7)',
    });
  }
  loadingRequestCount++;
};

const hideLoading = () => {
  if (loadingRequestCount <= 0) return;
  loadingRequestCount--;
  if (loadingRequestCount === 0) {
    loadingInstance.close();
  }
};

export { showLoading, hideLoading };
