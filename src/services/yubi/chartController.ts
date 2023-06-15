// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addChart POST /api/char/add */
export async function addChartUsingPOST(body: API.ChartReqDto, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/char/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteChart POST /api/char/delete/${param0} */
export async function deleteChartUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteChartUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/char/delete/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** genChartAnalyse POST /api/char/genChartAnalyse */
export async function genChartAnalyseUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genChartAnalyseUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.BaseResponseString_>('/api/char/genChartAnalyse', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** getChartById GET /api/char/get/${param0} */
export async function getChartByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChartByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseChart_>(`/api/char/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listMyChartByPage POST /api/char/my/list/page */
export async function listMyChartByPageUsingPOST(
  body: API.ChartQueryReqDto,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChart_>('/api/char/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateChart POST /api/char/update */
export async function updateChartUsingPOST(
  body: API.ChartReqDto,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/char/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
