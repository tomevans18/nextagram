import Link from 'next/link';
import Router, { useRouter } from "next/router";
import React from "react";
import Modal from "../../../js/components/modal";

function Page({ photos }) {
  const closeModal = () => {
    Router.push("/test/testId")
  }

  const openPhoto = (e, id) => {
    e.preventDefault()
    Router.push(`/[test]/testId?photoId=${id}`, `/test/testId/photo?id=${id}`)
  }

  const { query: { photoId } } = useRouter();

  return (
    <div>
      <nav><Link href="/profile" passHref><a>Profile</a></Link></nav>
      <div className="list">
        {
          photoId &&
            <Modal
              id={photoId}
              onDismiss={() => closeModal()}
            />
        }

        {
          photos.map((id) => (
            <div key={id} className="photo">
              <a
                className="photoLink"
                href={`/test/testId/photo?id=${id}`}
                onClick={(e) => openPhoto(e, id)}
              >
                {id}
              </a>
            </div>
          ))
        }

        <style jsx>{`
          .list {
            padding: 50px;
            text-align: center;
          }

          .photo {
            display: inline-block;
          }

          .photoLink {
            color: #333;
            verticalAlign: middle;
            cursor: pointer;
            background: #eee;
            display: inline-block;
            width: 250px;
            height: 250px;
            line-height: 250px;
            margin: 10px;
            border: 2px solid transparent;
          }

          .photoLink:hover {
            borderColor: blue;
          }
        `}</style>
      </div>
    </div>
  );
}

Page.getInitialProps = () => {
  return {
    photos: new Array(15).fill(0).map((v, k) => k + 1)
  }
}

export default Page;
