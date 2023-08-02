import Product from '../types/types';

export default function checkData(res: any, data: Product) {
  if (typeof data.productName !== 'string') {
    return res
      .status(400)
      .send(
        `${data.productName} inválido! O dado esperado em productName é um texto.`
      );
  } else if (typeof data.productDescription !== 'string') {
    return res
      .status(400)
      .send(
        `${data.productDescription} inválido! O dado esperado em productDescription é um texto.`
      );
  } else if (typeof data.productCategory !== 'string') {
    return res
      .status(400)
      .send(
        `${data.productCategory} inválido! O dado esperado em productCategory é um texto.`
      );
  } else if (typeof data.productCost !== 'number') {
    return res
      .status(400)
      .send(
        `${data.productCost} inválido! O dado esperado em productCost é um número.`
      );
  }

  if (
    !Array.isArray(data.productTags) ||
    !data.productTags.every((tag) => typeof tag === 'string')
  ) {
    return res
      .status(400)
      .send(
        `${data.productTags} inválido! O dado esperado em productTags são textos.`
      );
  } else if (
    !Array.isArray(data.productRelated) ||
    !data.productRelated.every((related) => typeof related === 'number')
  ) {
    return res
      .status(400)
      .send(
        `${data.productRelated} inválido! O dado esperado em productRelated são números.`
      );
  }
}
