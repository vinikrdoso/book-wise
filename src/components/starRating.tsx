import Image from 'next/image'
import starFilled from '@/assets/stars/star-filled.svg'
import emptyStar from '@/assets/stars/empty-star.svg'
import halfStar from '@/assets/stars/half-star.svg'

interface StarRatingProps {
  rating: number | undefined
}

export function StarRating({ rating = 0 }: StarRatingProps) {
  const TOTAL_STARS = 5

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= TOTAL_STARS; i++) {
      if (i <= rating) {
        stars.push(
          <Image
            src={starFilled}
            width={16}
            height={16}
            key={i}
            alt="Star Filled"
          />,
        )
      } else if (i - rating === 0.5) {
        stars.push(
          <Image
            src={halfStar}
            width={16}
            height={16}
            key={i}
            alt="Half Star"
          />,
        )
      } else {
        stars.push(
          <Image
            src={emptyStar}
            width={16}
            height={16}
            key={i}
            alt="Empty Star"
          />,
        )
      }
    }
    return stars
  }

  return <div className="flex gap-1 items-center">{renderStars()}</div>
}
