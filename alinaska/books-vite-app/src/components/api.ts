const fetchData = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {      
      const errorData = await response.json(); 
      const errorMessage = errorData.message; 
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};

export const fetchSearch = async (searchText: string) => {
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  return fetchData(url);
};

export const fetchDetails = async (key: string | undefined) => {
  const url = `https://openlibrary.org/books/${key}/editions.json`;
  return fetchData(url);
};

export const fetchAuthor = async (id: string | undefined) => {
  const url = `https://openlibrary.org/search.json?author=${id}`;
  return fetchData(url);
};

