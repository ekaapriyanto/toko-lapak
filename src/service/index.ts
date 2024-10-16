export const getData = async (url: string) => { //get data dari api
    const res = await fetch(url, {
      //cache: "force-cache", // untuk cache data
      cache: "no-store", // secara default next js itu ada caching, jadi jika kita ingin slalu update data bisa menggunakan no-stote
     //next: {
           //revalidate: 3600 //selama 1 jam akan update data
    //       //tags: ['banners'], //akan update di triger manual
    //}
    });
  
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  }