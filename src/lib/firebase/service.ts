import {
  collection,
  doc,
  getDocs,
  getDoc,
  getFirestore,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function getBanners(banner: string) {
  const snapshot = await getDocs(collection(firestore, banner));
  //fungsi getDocs untuk mengambil data dari collection
  const data = snapshot.docs.map((doc) => ({ 
    id: doc.id,
    ...doc.data(),
  }));
  //mengubah hasil query menjadi array object, setiap objek mewakili 1 data
  //setiap object memiliki property id yang di ambil dari doc.id dan semua properti lainya (...doc.data())
  return data.filter(banner => (banner as { isActive?: number }).isActive === 1); //fungsi untuk memfilter data yang isActive bernilai 1
}

export async function getCatImage(catImage: string) {
  const snapshot = await getDocs(collection(firestore, catImage));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data.sort((a : any, b: any) => a.id - b.id); //untuk sort data berdasarkan id
}

export async function getNewArrival(productNewArrival: string) {
  const q = query(
    collection(firestore, productNewArrival),
    orderBy("id", "desc"),
    limit(4)
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function getProduct(products: string) {
  const snapshot = await getDocs(collection(firestore, products));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function getProductById(products: string, id: string) {
  const snapshot = await getDoc(doc(firestore, products, id));
  const data = snapshot.data();
  return data;
}

export async function getImageProductById(images: string, imageId: string) {
  const q = query(collection(firestore, images), where("imageId", "==", imageId));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    imageId: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function login(data: { email: string }) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user) {
    return user[0];
  } else {
    return null;
  }
}
