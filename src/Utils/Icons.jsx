
import { useHomeContext } from "../Context/Home-context";

function IconsComent() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='gray' class="bi bi-chat-square" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
    </svg>
  );
}

function IconsRetweet(e) {
  const [state, dispatch] = useHomeContext();

  function Retweet(item) {
    const updatedData = state.getRetweet.filter((data) => data.item !== item);

    if (updatedData.length === state.getRetweet.length) {
      // Data tidak ditemukan dalam array, tambahkan data baru
      dispatch({
        type: "GetRetweet",
        payload: [...state.getRetweet, { item }],
      });
    } else {
      // Data ditemukan dalam array, hapus data tersebut
      dispatch({
        type: "GetRetweet",
        payload: updatedData,
      });
    }
  }

  return (
    <button onClick={Retweet.bind(this, e)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="bi bi-repeat" viewBox="0 0 16 16" className={`fill-gray-500`}>
        <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
      </svg>
    </button>
  );
}

function IconsTerRetweet(e) {
  const [state, dispatch] = useHomeContext();

  function deleteRetweet(item) {
    const newRetweet = state.getRetweet.filter((e) => e !== item);

    dispatch({
      type: "DeleteRetweet",
      payload: newRetweet,
    });
  }
  return (
    <button onClick={deleteRetweet.bind(this, e)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="bi bi-repeat" viewBox="0 0 16 16" className={`fill-green-700`}>
        <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
      </svg>
    </button>
  );
}

function IconsLove(e) {
  const [state, dispatch] = useHomeContext();
  function Suka(item) {
    const updatedData = state.getSuka.filter((data) => data.item !== item);

    if (updatedData.length === state.getSuka.length) {
      // Data tidak ditemukan dalam array, tambahkan data baru
      dispatch({
        type: "GetSuka",
        payload: [...state.getSuka, { item }],
      });
    } else {
      // Data ditemukan dalam array, hapus data tersebut
      dispatch({
        type: "GetSuka",
        payload: updatedData,
      });
    }
  }

  return (
    <button onClick={Suka.bind(this, e)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="bi bi-heart" viewBox="0 0 16 16" className={`fill-gray-500`}>
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
      </svg>
    </button>
  );
}

function IconsTerLove(e) {
  const [state, dispatch] = useHomeContext();

  function deleteSuka(item) {
    const newSuka = state.getSuka.filter((e) => e !== item);

    dispatch({
      type: "DeleteSuka",
      payload: newSuka,
    });
  }

  return (
    <button onClick={deleteSuka.bind(this, e)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="bi bi-heart" viewBox="0 0 16 16" className={`fill-red-700`}>
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
      </svg>
    </button>
  );
}

function IconsViews() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-bar-chart" viewBox="0 0 16 16">
      <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
    </svg>
  );
}

function IconsSosial(e) {
  // const [state, dispatch] = useHomeContext()

  // function deleteTweet(item) {

  //   const filterItem = state.getRetweet.filter((e) => {
  //     return e.item !== item
  //   })

  //   dispatch({
  //     type: 'GetRetweet',
  //     payload: filterItem
  //     })
  // }

  return (
    // <button onClick={deleteTweet.bind(this, e)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" class="bi bi-link" viewBox="0 0 16 16">
      <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
      <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
    </svg>
    // </button>
  );
}

function IconsVerified() {
  return (
    <button className="-ml-[6px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(0, 136, 255)" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
      </svg>
    </button>
  );
}

function IconsClose() {
  return (
    <button>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
    </svg>
  </button>
  )
}

export { IconsComent, IconsRetweet, IconsLove, IconsViews, IconsSosial, IconsVerified, IconsTerRetweet, IconsTerLove, IconsClose };
