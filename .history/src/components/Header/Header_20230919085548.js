const Header = tyled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.688rem 2.5rem;
  background-color: rgba(0, 0, 0, 0.9);
`

.container img{
  width: 168.45px;
  height: 40px;
}

@media screen and (max-width: 570px) {
  .container{
    padding: 1.5rem 1.25rem;
  }
  
  .container img{
    width: 140px;
    height: 20px;
  }
}