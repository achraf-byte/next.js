'use server'
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { URL_END_POINT } from '../../app/[locale]/consts/endPoints';

async function fetchMethod(
  params = {
    method: 'POST',
    url: URL_END_POINT,
    action: 'authVerification',
    data: {},
  }
) {
  const headersInstance = cookies();
  const token = headersInstance.get('authorization');
  console.log(token.value);

  const fetchMethod = await fetch(params.url, {
    method: params.method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token.value}` }),
    },
    credentials: 'include',
    body: JSON.stringify({
      action: params.action,
      params: params.data,
    }),
  });

  // console.log(fetchMethod.body);

  if (fetchMethod.ok) {
    const clonedResponse = fetchMethod.clone();
    
    const responseBody = await clonedResponse.text();
    if (responseBody !== 'Not authenticated.') {
      console.log(responseBody)
      var response = JSON.parse(responseBody);
      // var response = await fetchMethod.json();

      if (response.token) {
        headersInstance.set('authorization', response.token);
        redirect('/fr/recherche-pdmsparepart');
      } else if (params.action !== 'login') {
        return response.data
      }
      return response;
    }else{
      redirect('/fr/connection');
    }
  } else {
    console.log('error');
  }
}

export default fetchMethod;
