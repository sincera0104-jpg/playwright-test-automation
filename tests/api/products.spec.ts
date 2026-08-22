import { test, expect } from '@playwright/test';

test('GET - 상품 목록 조회', async ({ request }) => {

  const response = await request.get('https://fakestoreapi.com/products');

  const body = await response.json();
  
  console.log(body);
  
  expect(response.status()).toBe(200);
  expect(Array.isArray(body)).toBeTruthy();
  const firstProduct = body[0];
  expect(firstProduct).toHaveProperty("title")
  expect(firstProduct).toHaveProperty("price")
  expect(firstProduct).toHaveProperty("category")

});